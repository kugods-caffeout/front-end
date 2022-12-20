import React, { useState } from 'react';
import {
	Platform,
	StyleSheet,
	View,
	Text,
	Pressable,
	Modal,
	TouchableWithoutFeedback,
} from 'react-native';
import { drink, RootStackScreenProps } from '../types';
import Dimensions from '../constants/Dimensions';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Colors from '../constants/Colors';
import WhitePlus from '../assets/white-plus.svg';
import DisabledWhiteMinus from '../assets/disabled-white-minus.svg';
import ActivatedWhiteMinus from '../assets/activated-white-minus.svg';
import BlackPlus from '../assets/black-plus.svg';
import DisabledBlackMinus from '../assets/disabled-black-minus.svg';
import ActivatedBlackMinus from '../assets/activated-black-minus.svg';
import Arrow from '../assets/arrowBtn.svg';
import Star from '../assets/starBtn.svg';
import BigArrow from '../assets/bigArrow.svg';
import ModalLine from '../assets/modalLine.svg';
import CalendarIcon from '../assets/calendar-icon.svg';
import YellowStar from '../assets/yellow-star.svg';
import SizeItem from '../component/SizeItem';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import getBrandSizeTable from '../data/BrandSizeTable';
import { useRecoilValue } from 'recoil';
import { getDrinkSelector } from '../recoil/selectors/getDrinkSelector';

export default function DrinkDetailScreen({
	navigation,
	route,
}: RootStackScreenProps<'DrinkDetail'>) {
	const drinkSelector = useRecoilValue<drink[]>(getDrinkSelector);
	const drinkName = route.params.drink.drink_name;
	const brand = route.params.drink.brand;
	const sizeList = getBrandSizeTable(brand);
	const initalSize = sizeList?.find(
		(item) => route.params.drink.size === item.size,
	);
	const initalTemperature =
		route.params.drink.temp === '' ? 'HOT' : route.params.drink.temp;
	const initialCaffeine = route.params.drink.caffeine;
	const temperatureList = ['HOT', 'ICE'];
	const additionalOptionList = [
		{ option: '선택 없음', multiplier: 1 },
		{ option: '블론드', multiplier: 1.2 },
		{ option: '디카페인', multiplier: 0.1 },
		{ option: '1/2디카페인', multiplier: 0.5 },
	];
	const [shotCount, setShotCount] = useState(0);
	const [cupCount, setCupCount] = useState(1);
	const [isBookMark, setBookMark] = useState(false);
	const [selectSize, setSelectSize] = useState(initalSize);
	const [selectSizeTemp, setSelectSizeTemp] = useState(selectSize);
	const [selectAdditionalOption, setSelectAdditionalOption] = useState({
		option: '선택 없음',
		multiplier: 1,
	});
	const [selectAdditionalOptionTemp, setSelectAdditionalOptionTemp] = useState(
		selectAdditionalOption,
	);
	const [caffeineGoal, setCaffeineGoal] = useState(60);
	const [selectTemperature, setSelectTemperature] = useState(initalTemperature);
	const [selectTemperatureTemp, setSelectTemperatureTemp] =
		useState(selectTemperature);
	const [optionModalVisible, setOptionModalVisible] = useState(false);
	const [sizeModalVisible, setSizeModalVisible] = useState(false);
	const [calendarOpen, setCalendarOpen] = useState(false);
	const [dateToAddDrink, setDateToAddDrink] = useState(new Date());

	function calcuateTotalCaffeine(initialCaffeine: number) {
		const initialCaffeineWithTemperature =
			route.params.drink.temp === ''
				? initialCaffeine
				: drinkSelector.filter(
						(drink) =>
							drink.brand === brand &&
							drink.drink_name === drinkName &&
							drink.temp === selectTemperature,
				  )[0].caffeine;
		const calcuatedTotalCaffeine =
			((initialCaffeineWithTemperature / initalSize?.volume) *
				selectSize?.volume +
				shotCount * 75) *
			selectAdditionalOption.multiplier *
			cupCount;
		return calcuatedTotalCaffeine.toFixed();
	}
	return (
		<>
			<Modal
				animationType='fade'
				transparent={true}
				visible={sizeModalVisible}
				onRequestClose={() => {
					setSizeModalVisible(!sizeModalVisible);
				}}
			>
				<TouchableWithoutFeedback
					onPress={() => {
						setSelectSizeTemp(selectSize);
						setSizeModalVisible(false);
					}}
				>
					<View
						style={{
							width: Dimensions.width * 390,
							height: Dimensions.height * 844,
							backgroundColor: Colors.Black,
							opacity: 0.5,
						}}
					/>
				</TouchableWithoutFeedback>
				<View style={styles.modal}>
					<ModalLine
						style={{
							alignSelf: 'center',
							marginBottom: Dimensions.height * 6,
						}}
					/>
					<View
						style={{
							height: Dimensions.height * 48,
							justifyContent: 'center',
						}}
					>
						<Text
							style={{
								fontSize: Dimensions.height * 16,
								color: Colors.Black,
								fontWeight: 'bold',
							}}
						>
							사이즈
						</Text>
					</View>

					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						{sizeList?.map((item) => (
							<Pressable
								onPress={() =>
									setSelectSizeTemp({
										size: item.size,
										volume: item.volume,
									})
								}
							>
								<SizeItem
									size={item.size}
									volume={item.volume}
									isSelected={selectSizeTemp?.size === item.size}
								/>
							</Pressable>
						))}
					</View>
					<View
						style={{
							width: Dimensions.width * 390,
							height: Dimensions.height * 130,
							position: 'absolute',
							bottom: useSafeAreaInsets().bottom,
							backgroundColor: Colors.White,
							justifyContent: 'center',
							alignItems: 'center',
							...Platform.select({
								ios: {
									shadowColor: 'black',
									shadowOffset: {
										width: 0,
										height: 4,
									},
									shadowOpacity: 0.1,
								},
								android: {
									shadowColor: '#00000010',
									evevation: 20,
								}, //적용 안됨
							}),
						}}
					>
						<Pressable
							style={{
								width: Dimensions.width * 358,
								height: Dimensions.height * 44,
								borderRadius: 30,
								backgroundColor: Colors.DarkBrown,
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={() => {
								setSelectSize(selectSizeTemp);
								setSizeModalVisible(false);
							}}
						>
							<Text
								style={{
									color: Colors.White,
									fontSize: Dimensions.height * 16,
									fontWeight: 'bold',
								}}
							>
								적용하기
							</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			<Modal
				animationType='fade'
				transparent={true}
				visible={optionModalVisible}
				onRequestClose={() => {
					setOptionModalVisible(!optionModalVisible);
				}}
			>
				<TouchableWithoutFeedback
					onPress={() => {
						setSelectAdditionalOptionTemp(selectAdditionalOption);
						setSelectTemperatureTemp(selectTemperature);
						setOptionModalVisible(false);
					}}
				>
					<View
						style={{
							width: Dimensions.width * 390,
							height: Dimensions.height * 844,
							backgroundColor: Colors.Black,
							opacity: 0.5,
						}}
					/>
				</TouchableWithoutFeedback>
				<View style={styles.modal}>
					<ModalLine
						style={{
							alignSelf: 'center',
							marginBottom: Dimensions.height * 6,
						}}
					/>
					<View
						style={{
							height: Dimensions.height * 48,
							justifyContent: 'center',
						}}
					>
						<Text
							style={{
								fontSize: Dimensions.height * 16,
								color: Colors.Black,
								fontWeight: 'bold',
							}}
						>
							온도
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							borderRadius: 5,
							borderWidth: 1,
							borderColor: Colors.DarkGray,
						}}
					>
						{temperatureList.map((temperature) => (
							<Pressable
								style={{
									width: Dimensions.width * 171,
									height: Dimensions.height * 40,
									borderWidth: 0.5,
									borderColor: Colors.DarkGray,
									backgroundColor:
										selectTemperatureTemp === temperature
											? Colors.Brown
											: Colors.White,
									justifyContent: 'center',
									alignItems: 'center',
								}}
								onPress={() => setSelectTemperatureTemp(temperature)}
							>
								<Text
									style={{
										fontSize: Dimensions.height * 16,
										color:
											selectTemperatureTemp === temperature
												? Colors.White
												: Colors.DeepGray,
										fontWeight: 'bold',
									}}
								>
									{temperature}
								</Text>
							</Pressable>
						))}
					</View>
					<View
						style={{
							height: Dimensions.height * 48,
							justifyContent: 'center',
						}}
					>
						<Text
							style={{
								fontSize: Dimensions.height * 16,
								color: Colors.Black,
								fontWeight: 'bold',
							}}
						>
							추가 옵션
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						{additionalOptionList.map((item) => (
							<Pressable
								style={{
									paddingHorizontal: Dimensions.width * 8,
									height: Dimensions.height * 28,
									borderWidth: 1,
									borderColor: Colors.DarkGray,
									borderRadius: 5,
									backgroundColor:
										selectAdditionalOptionTemp.option === item.option
											? Colors.Brown
											: Colors.White,
									justifyContent: 'center',
									alignItems: 'center',
								}}
								onPress={() => setSelectAdditionalOptionTemp(item)}
							>
								<Text
									style={{
										color:
											selectAdditionalOptionTemp.option === item.option
												? Colors.White
												: Colors.DeepGray,
										fontSize: Dimensions.height * 16,
									}}
								>
									{item.option}
								</Text>
							</Pressable>
						))}
					</View>
					<View
						style={{
							width: Dimensions.width * 390,
							height: Dimensions.height * 130,
							position: 'absolute',
							bottom: useSafeAreaInsets().bottom,
							backgroundColor: Colors.White,
							justifyContent: 'center',
							alignItems: 'center',
							...Platform.select({
								ios: {
									shadowColor: 'black',
									shadowOffset: {
										width: 0,
										height: 4,
									},
									shadowOpacity: 0.1,
								},
								android: {
									shadowColor: '#00000010',
									evevation: 20,
								}, //적용 안됨
							}),
						}}
					>
						<Pressable
							style={{
								width: Dimensions.width * 358,
								height: Dimensions.height * 44,
								borderRadius: 30,
								backgroundColor: Colors.DarkBrown,
								justifyContent: 'center',
								alignItems: 'center',
							}}
							onPress={() => {
								setSelectTemperature(selectTemperatureTemp);
								setSelectAdditionalOption(selectAdditionalOptionTemp);
								setOptionModalVisible(false);
							}}
						>
							<Text
								style={{
									color: Colors.White,
									fontSize: Dimensions.height * 16,
									fontWeight: 'bold',
								}}
							>
								적용하기
							</Text>
						</Pressable>
					</View>
				</View>
			</Modal>

			<View
				style={[
					styles.topContainer,
					{
						paddingTop: useSafeAreaInsets().top,
						paddingBottom: useSafeAreaInsets().bottom,
					},
				]}
			>
				<View style={styles.headerContainer}>
					<View
						style={{
							height: Dimensions.height * 48,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Arrow onPress={() => navigation.goBack()} />
						{isBookMark ? (
							<YellowStar
								onPress={() => {
									setBookMark(false);
								}}
							/>
						) : (
							<Star
								onPress={() => {
									setBookMark(true);
								}}
							/>
						)}
					</View>
					<Text
						style={{
							fontSize: Dimensions.height * 16,
							color: Colors.White,
							fontWeight: 'bold',
						}}
					>
						{brand}
					</Text>
					<View
						style={{
							height: Dimensions.height * 30,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								color: Colors.White,
								fontSize: Dimensions.height * 25,
								fontWeight: 'bold',
							}}
						>
							{drinkName}
						</Text>
						<View
							style={{
								flexDirection: 'row',
								width: Dimensions.width * 135,
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							{cupCount === 1 ? (
								<DisabledWhiteMinus />
							) : (
								<ActivatedWhiteMinus
									width='18'
									height='18'
									viewBox='0 0 18 18'
									onPress={() => {
										if (cupCount != 1) setCupCount(cupCount - 1);
									}}
								></ActivatedWhiteMinus>
							)}
							<Text
								style={{
									fontSize: Dimensions.height * 21,
									color: Colors.White,
									fontWeight: 'bold',
								}}
							>
								{cupCount}잔
							</Text>
							<WhitePlus
								width='18'
								height='18'
								viewBox='0 0 18 18'
								onPress={() => {
									setCupCount(cupCount + 1);
								}}
							/>
						</View>
					</View>
				</View>
				<View
					style={[
						styles.BottomContainer,
						{
							position: 'absolute',
							top: useSafeAreaInsets().top + Dimensions.height * 157,
							right: useSafeAreaInsets().right + Dimensions.width * 16,
						},
					]}
				>
					<View
						style={{
							height: Dimensions.height * 56,
							justifyContent: 'space-between',
						}}
					>
						<Text
							style={{ color: Colors.Black, fontSize: Dimensions.height * 14 }}
						>
							총 카페인 함량
						</Text>

						<Text
							style={{
								color: Colors.Black,
								fontSize: Dimensions.height * 30,
								fontWeight: 'bold',
							}}
						>
							{calcuateTotalCaffeine(initialCaffeine)}mg
						</Text>
					</View>
					<View
						style={{
							height: Dimensions.height * 40,
							justifyContent: 'space-between',
						}}
					>
						<View
							style={{
								height: Dimensions.height * 19,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									color: Colors.Black,
								}}
							>
								{`하루 카페인 섭취 목표량의  `}
							</Text>
							<Text
								style={{
									color: Colors.Black,
									fontSize: Dimensions.height * 16,
									fontWeight: 'bold',
								}}
							>
								{caffeineGoal}%
							</Text>
						</View>

						<View
							style={{
								width: Dimensions.width * 319,
								height: Dimensions.height * 10.69,
								borderRadius: 20,
								backgroundColor: Colors.DarkGray,
								marginTop: Dimensions.height * 9.65,
							}}
						>
							<View
								style={{
									width: caffeineGoal + '%',
									height: Dimensions.height * 10.69,
									borderRadius: 20,
									backgroundColor: Colors.Brown,
								}}
							/>
						</View>
					</View>
				</View>
				<View
					style={{
						backgroundColor: Colors.White,
						width: Dimensions.width * 390,
						height: Dimensions.height * 208,
						paddingTop: Dimensions.height * 131,
					}}
				>
					<Pressable
						onPress={() => setSizeModalVisible(true)}
						style={({ pressed }) => ({
							opacity: pressed ? 0.5 : 1,
							width: Dimensions.width * 390,
							height: Dimensions.height * 76,
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							backgroundColor: Colors.White,
							borderBottomColor: Colors.LightGray,
							borderBottomWidth: 1,
							paddingHorizontal: Dimensions.width * 25,
						})}
					>
						<View
							style={{
								backgroundColor: Colors.White,
								height: Dimensions.height * 43,
								justifyContent: 'space-between',
							}}
						>
							<Text
								style={{
									color: Colors.Black,
									fontSize: Dimensions.height * 16,
									fontWeight: 'bold',
								}}
							>
								사이즈
							</Text>
							<Text
								style={{
									fontSize: Dimensions.height * 16,
									color: Colors.DeepGray,
									fontWeight: '500',
								}}
							>
								{selectSize?.size} ({(selectSize?.volume * 29.5735).toFixed()}
								ml)
							</Text>
						</View>
						<BigArrow />
					</Pressable>
				</View>
				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.5 : 1,
						width: Dimensions.width * 390,
						height: Dimensions.height * 76,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						backgroundColor: Colors.White,
						borderBottomColor: Colors.LightGray,
						borderBottomWidth: 1,
						paddingHorizontal: Dimensions.width * 25,
					})}
					onPress={() => setOptionModalVisible(true)}
				>
					<View
						style={{
							backgroundColor: Colors.White,
							height: Dimensions.height * 43,
							justifyContent: 'space-between',
						}}
					>
						<Text
							style={{
								color: Colors.Black,
								fontSize: Dimensions.height * 16,
								fontWeight: 'bold',
							}}
						>
							옵션
						</Text>
						<Text
							style={{
								fontSize: Dimensions.height * 16,
								color: Colors.DeepGray,
								fontWeight: '500',
							}}
						>
							{selectTemperature}, {selectAdditionalOption.option}
						</Text>
					</View>
					<BigArrow />
				</Pressable>
				<View
					style={{
						width: Dimensions.width * 390,
						height: Dimensions.height * 66,
						backgroundColor: Colors.White,
						borderBottomColor: Colors.LightGray,
						borderBottomWidth: 1,
						paddingHorizontal: Dimensions.width * 25,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							color: Colors.Black,
							fontSize: Dimensions.height * 16,
							fontWeight: 'bold',
						}}
					>
						샷 추가
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							width: Dimensions.width * 92,
							height: Dimensions.height * 19,
							backgroundColor: Colors.White,
						}}
					>
						{shotCount === 0 ? (
							<DisabledBlackMinus />
						) : (
							<ActivatedBlackMinus
								onPress={() => {
									if (shotCount != 0) setShotCount(shotCount - 1);
								}}
							/>
						)}
						<Text
							style={{
								color: Colors.Black,
								fontSize: Dimensions.height * 16,
								fontWeight: 'bold',
							}}
						>
							{shotCount}
						</Text>
						<BlackPlus
							onPress={() => {
								setShotCount(shotCount + 1);
							}}
						/>
					</View>
				</View>
				<View
					style={{
						width: Dimensions.width * 390,
						height: Dimensions.height * 66,
						backgroundColor: Colors.White,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						paddingHorizontal: Dimensions.width * 25,
					}}
				>
					<Text
						style={{
							fontSize: Dimensions.height * 16,
							color: Colors.Black,
							fontWeight: 'bold',
						}}
					>
						날짜
					</Text>
					<Pressable
						style={({ pressed }) => ({
							opacity: pressed ? 0.5 : 1,
							flexDirection: 'row',
							alignItems: 'center',
							backgroundColor: Colors.White,
						})}
						onPress={() => setCalendarOpen(true)}
					>
						<Text
							style={{
								fontSize: Dimensions.height * 16,
								color: Colors.Black,
								marginRight: Dimensions.width * 15,
							}}
						>
							{dateToAddDrink.getFullYear() +
								'년 ' +
								(dateToAddDrink.getMonth() + 1) +
								'월 ' +
								dateToAddDrink.getDate() +
								'일'}
						</Text>
						<CalendarIcon />
					</Pressable>
				</View>
				<View
					style={{
						width: Dimensions.width * 390,
						height: Dimensions.height * 130,
						position: 'absolute',
						bottom:
							useSafeAreaInsets().bottom +
							Dimensions.androidBottomNavigationBarHeight,
						backgroundColor: Colors.White,
						justifyContent: 'center',
						alignItems: 'center',
						...Platform.select({
							ios: {
								shadowColor: 'black',
								shadowOffset: {
									width: 0,
									height: 4,
								},
								shadowOpacity: 0.1,
							},
							android: {
								shadowColor: '#00000010',
								evevation: 20,
							}, //적용 안됨
						}),
					}}
				>
					<Pressable
						style={{
							width: Dimensions.width * 358,
							height: Dimensions.height * 44,
							borderRadius: 30,
							backgroundColor: Colors.DarkBrown,
							justifyContent: 'center',
							alignItems: 'center',
						}}
						onPress={() => navigation.goBack()}
					>
						<Text
							style={{
								color: Colors.White,
								fontSize: Dimensions.height * 16,
								fontWeight: 'bold',
							}}
						>
							음료 추가
						</Text>
					</Pressable>
				</View>
				<DateTimePickerModal
					isVisible={calendarOpen}
					mode={'date'}
					onConfirm={(date) => {
						setDateToAddDrink(date);
						setCalendarOpen(false);
					}}
					onCancel={() => setCalendarOpen(false)}
					display={'inline'}
					locale={'ko'}
					confirmTextIOS={'확인'}
					cancelTextIOS={'취소'}
					accentColor={Colors.Brown}
					date={dateToAddDrink}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	topContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 844,
		backgroundColor: Colors.White,
		alignItems: 'center',
	},
	headerContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 211,
		backgroundColor: Colors.DarkBrown,
		paddingHorizontal: Dimensions.width * 12,
	},
	BottomContainer: {
		width: Dimensions.width * 358,
		height: Dimensions.height * 150,
		backgroundColor: Colors.White,
		zIndex: 2000,
		borderRadius: 10,
		...Platform.select({
			ios: {
				shadowColor: Colors.Black,
				shadowOffset: {
					width: 0.5,
					height: 0.5,
				},
				shadowOpacity: 0.5,
				shadowRadius: 7,
			},
			android: {
				evevation: 20,
			}, //여기 수정부탁
		}),
		paddingHorizontal: Dimensions.width * 20,
		paddingVertical: Dimensions.width * 15,
		justifyContent: 'space-between',
	},
	searchBarInput: {
		width: Dimensions.width * 278,
		height: Dimensions.height * 44,
		color: Colors.Black,
	},
	clearButton: {
		width: Dimensions.width * 32,
		height: Dimensions.height * 44,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modal: {
		width: Dimensions.width * 391,
		height: Dimensions.height * 461,
		backgroundColor: Colors.White,
		position: 'absolute',
		bottom: 0,
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		paddingTop: Dimensions.height * 18,
		paddingHorizontal: Dimensions.width * 25,
	},
	tailContainter: {
		width: Dimensions.width * 358,
		height: Dimensions.height * 44,
		borderRadius: 30,
		backgroundColor: Colors.DarkBrown,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
