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
import { RootStackScreenProps } from '../types';
import Dimensions from '../constants/Dimensions';
import DatePicker from 'react-native-date-picker';
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

export default function DrinkDetailScreen({
	navigation,
}: RootStackScreenProps<'DrinkDetail'>) {
	const sizeList = [
		{ size: 'Short', volume: 236 },
		{ size: 'Tall', volume: 354 },
		{ size: 'Grande', volume: 473 },
		{ size: 'Venti', volume: 591 },
	];
	const temperatureList = ['HOT', 'ICE'];
	const additionalOptionList = [
		{ option: '선택 없음', multiplier: 1 },
		{ option: '블론드', multiplier: 1 },
		{ option: '디카페인', multiplier: 0.1 },
		{ option: '1/2디카페인', multiplier: 0.5 },
	];
	const [caffeineCount, setCaffeineCount] = useState(0);
	const [cupCount, setCupCount] = useState(1);
	const [isBookMark, setBookMark] = useState(false);
	const [selectSize, setSelectSize] = useState({ size: 'Tall', volume: 354 });
	const [selectSizeTemp, setSelectSizeTemp] = useState(selectSize);
	const [selectAdditionalOption, setSelectAdditionalOption] = useState({
		option: '선택 없음',
		multiplier: 1,
	});
	const [selectAdditionalOptionTemp, setSelectAdditionalOptionTemp] = useState(
		selectAdditionalOption,
	);
	const [caffeineGoal, setCaffeineGoal] = useState(60);
	const [selectTemperature, setSelectTemperature] = useState('ICE');
	const [selectTemperatureTemp, setSelectTemperatureTemp] =
		useState(selectTemperature);
	const [optionModalVisible, setOptionModalVisible] = useState(false);
	const [sizeModalVisible, setSizeModalVisible] = useState(false);
	const [calendarOpen, setCalendarOpen] = useState(false);
	const [dateToAddDrink, setDateToAddDrink] = useState(new Date());
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
								fontSize: 16,
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
						{sizeList.map((item) => (
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
									isSelected={selectSizeTemp.size === item.size}
								/>
							</Pressable>
						))}
					</View>

					<Pressable
						style={{
							width: Dimensions.width * 358,
							height: Dimensions.height * 44,
							position: 'absolute',
							bottom: useSafeAreaInsets().bottom,
							borderRadius: 30,
							backgroundColor: Colors.DarkBrown,
							justifyContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
						}}
						onPress={() => {
							setSelectSize(selectSizeTemp);
							setSizeModalVisible(false);
						}}
					>
						<Text
							style={{ color: Colors.White, fontSize: 16, fontWeight: 'bold' }}
						>
							적용하기
						</Text>
					</Pressable>
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
								fontSize: 16,
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
										fontSize: 16,
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
								fontSize: 16,
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
									marginRight: Dimensions.width * 17,
								}}
								onPress={() => setSelectAdditionalOptionTemp(item)}
							>
								<Text
									style={{
										color:
											selectAdditionalOptionTemp.option === item.option
												? Colors.White
												: Colors.DeepGray,
										fontSize: 16,
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
							backgroundColor: Colors.White,
							alignItems: 'center',
							justifyContent: 'center',
							position: 'absolute',
							bottom: 75,
						}}
					>
						<Pressable
							style={{
								width: Dimensions.width * 358,
								height: Dimensions.height * 44,
								marginTop: Dimensions.height * 65,
								position: 'absolute',
								bottom: 0,
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
									fontSize: 16,
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
						<Arrow />
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
							fontSize: 16,
							color: Colors.White,
							fontWeight: 'bold',
						}}
					>
						스타벅스
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
								fontSize: 25,
								fontWeight: 'bold',
							}}
						>
							돌체 콜드 브루
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
									fontSize: 21,
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
						<Text style={{ color: Colors.Black, fontSize: 14 }}>
							총 카페인 함량
						</Text>

						<Text
							style={{ color: Colors.Black, fontSize: 30, fontWeight: 'bold' }}
						>
							155mg
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
									fontSize: 16,
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
									fontSize: 16,
									fontWeight: 'bold',
								}}
							>
								사이즈
							</Text>
							<Text
								style={{
									fontSize: 16,
									color: Colors.DeepGray,
									fontWeight: '500',
								}}
							>
								{selectSize.size} ({selectSize.volume}ml)
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
								fontSize: 16,
								fontWeight: 'bold',
							}}
						>
							옵션
						</Text>
						<Text
							style={{
								fontSize: 16,
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
						style={{ color: Colors.Black, fontSize: 16, fontWeight: 'bold' }}
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
						{caffeineCount === 0 ? (
							<DisabledBlackMinus />
						) : (
							<ActivatedBlackMinus
								onPress={() => {
									if (caffeineCount != 0) setCaffeineCount(caffeineCount - 1);
								}}
							/>
						)}
						<Text
							style={{ color: Colors.Black, fontSize: 16, fontWeight: 'bold' }}
						>
							{caffeineCount}
						</Text>
						<BlackPlus
							onPress={() => {
								setCaffeineCount(caffeineCount + 1);
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
						style={{ fontSize: 16, color: Colors.Black, fontWeight: 'bold' }}
					>
						날짜
					</Text>
					<Pressable
						style={({ pressed }) => ({
							opacity: pressed ? 0.5 : 1,
							width: Dimensions.width * 140,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							backgroundColor: Colors.White,
						})}
						onPress={() => setCalendarOpen(true)}
					>
						<Text style={{ fontSize: 16, color: Colors.Black }}>
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
				<Pressable
					style={{
						width: Dimensions.width * 358,
						height: Dimensions.height * 44,
						marginTop: Dimensions.height * 65,
						borderRadius: 30,
						backgroundColor: Colors.DarkBrown,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text
						style={{ color: Colors.White, fontSize: 16, fontWeight: 'bold' }}
					>
						음료 추가
					</Text>
				</Pressable>
				<DatePicker
					modal={true}
					open={calendarOpen}
					date={dateToAddDrink}
					onConfirm={(date) => {
						setDateToAddDrink(date);
						setCalendarOpen(false);
					}}
					onCancel={() => setCalendarOpen(false)}
					mode={'date'}
					locale={'ko'}
					title={'음료를 추가할 날짜 선택'}
					confirmText='확인'
					cancelText='취소'
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
