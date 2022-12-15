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
import { SafeAreaView } from 'react-native-safe-area-context';
import BlackPlus from '../assets/black-plus.svg';
import DisabledBlackMinus from '../assets/disabled-black-minus.svg';
import ActivatedBlackMinus from '../assets/activated-black-minus.svg';
import Arrow from '../assets/arrowBtn.svg';
import Star from '../assets/starBtn.svg';
import BigArrow from '../assets/bigArrow.svg';
import ModalLine from '../assets/modalLine.svg';
import CalendarIcon from '../assets/calendar-icon.svg';
import YellowStar from '../assets/yellow-star.svg';

export default function DrinkDetailScreen({
	navigation,
}: RootStackScreenProps<'DrinkDetail'>) {
	const Size = ['Short', 'Tall', 'Grande', 'Venti'];
	const Option = ['블론드', '디카페인', '1/2디카페인'];
	const [caffeineCount, setCaffeineCount] = useState(0);
	const [cupCount, setCupCount] = useState(1);
	const [isBookMark, setBookMark] = useState(false);
	const [selectSize, setSelectSize] = useState('Tall');
	const [selectOption, setSelectOption] = useState('선택 없음');
	const [caffeineGoal, setCaffeineGoal] = useState(60);
	const [selectTemperature, setTemperature] = useState('ICE');
	const [optionModalVisible, setOptionModalVisible] = useState(false);
	const [sizeModalVisible, setSizeModalVisible] = useState(false);
	const [calendarOpen, setCalendarOpen] = useState(false);
	const [dateToAddDrink, setDateToAddDrink] = useState(new Date());
	return (
		<SafeAreaView style={styles.topContainer}>
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
					<View
						style={{
							alignItems: 'center',
						}}
					>
						<ModalLine />
					</View>
					<Text
						style={{
							fontSize: 16,
							color: Colors.Black,
							fontWeight: '700',
							paddingTop: Dimensions.height * 20,
							paddingLeft: 25,
						}}
					>
						사이즈
					</Text>
					<View style={{ flexDirection: 'row' }}>
						<Pressable
							style={{
								width: Dimensions.width * 81,
								height: Dimensions.height * 121,
								marginTop: Dimensions.height * 20,
								marginLeft: 25,
								borderWidth: 1,
								borderStyle: 'solid',
								borderColor: Colors.DarkGray,
								borderRadius: 10,
								backgroundColor: Colors.White,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									color: Colors.DeepGray,
									fontSize: 16,
									fontWeight: '700',
								}}
							>
								Short
							</Text>
							<Text style={{ color: '#C7C7C7', fontSize: 13 }}>236ml</Text>
						</Pressable>
						<Pressable
							style={{
								width: Dimensions.width * 81,
								height: Dimensions.height * 121,
								marginTop: Dimensions.height * 20,
								marginLeft: 6,
								borderWidth: 1,
								borderStyle: 'solid',
								borderColor: Colors.DarkGray,
								borderRadius: 10,
								backgroundColor: Colors.White,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									color: Colors.DeepGray,
									fontSize: 16,
									fontWeight: '700',
								}}
							>
								Tall
							</Text>
							<Text style={{ color: '#C7C7C7', fontSize: 13 }}>354ml</Text>
						</Pressable>
						<Pressable
							style={{
								width: Dimensions.width * 81,
								height: Dimensions.height * 121,
								marginTop: Dimensions.height * 20,
								marginLeft: 6,
								borderWidth: 1,
								borderStyle: 'solid',
								borderColor: Colors.DarkGray,
								borderRadius: 10,
								backgroundColor: Colors.White,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									color: Colors.DeepGray,
									fontSize: 16,
									fontWeight: '700',
								}}
							>
								Grande
							</Text>
							<Text style={{ color: '#C7C7C7', fontSize: 13 }}>473ml</Text>
						</Pressable>
						<Pressable
							style={{
								width: Dimensions.width * 81,
								height: Dimensions.height * 121,
								marginTop: Dimensions.height * 20,
								marginLeft: 6,
								borderWidth: 1,
								borderStyle: 'solid',
								borderColor: Colors.DarkGray,
								borderRadius: 10,
								backgroundColor: Colors.White,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									color: Colors.DeepGray,
									fontSize: 16,
									fontWeight: '700',
								}}
							>
								Venti
							</Text>
							<Text style={{ color: '#C7C7C7', fontSize: 13 }}>591ml</Text>
						</Pressable>
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
								setSizeModalVisible(false);
							}}
						>
							<Text
								style={{ color: Colors.White, fontSize: 16, fontWeight: '700' }}
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
					<View
						style={{
							alignItems: 'center',
						}}
					>
						<ModalLine />
					</View>
					<Text
						style={{
							fontSize: 16,
							color: Colors.Black,
							fontWeight: '700',
							paddingTop: Dimensions.height * 20,
							paddingLeft: 20,
						}}
					>
						온도
					</Text>
					<View style={{ flexDirection: 'row' }}>
						<Pressable
							style={{
								width: Dimensions.width * 171,
								height: Dimensions.height * 40,
								marginTop: Dimensions.height * 20,
								marginLeft: 20,
								borderWidth: 1,
								borderStyle: 'solid',
								borderColor: Colors.DarkGray,
								borderRadius: 5,
								backgroundColor: Colors.White,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									fontSize: 16,
									color: Colors.DeepGray,
									fontWeight: '700',
								}}
							>
								HOT
							</Text>
						</Pressable>
						<Pressable
							style={{
								width: Dimensions.width * 171,
								height: Dimensions.height * 40,
								marginTop: Dimensions.height * 20,
								borderWidth: 1,
								borderStyle: 'solid',
								borderColor: Colors.DarkGray,
								borderRadius: 5,
								backgroundColor: Colors.White,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									fontSize: 16,
									color: Colors.DeepGray,
									fontWeight: '700',
								}}
							>
								ICE
							</Text>
						</Pressable>
					</View>
					<Text
						style={{
							fontSize: 16,
							color: Colors.Black,
							fontWeight: '700',
							paddingTop: Dimensions.height * 20,
							paddingLeft: 20,
						}}
					>
						추가 옵션
					</Text>
					<View style={{ flexDirection: 'row' }}>
						<Pressable
							style={{
								width: Dimensions.width * 58,
								height: Dimensions.height * 28,
								marginTop: Dimensions.height * 20,
								marginLeft: 20,
								borderWidth: 1,
								borderStyle: 'solid',
								borderColor: Colors.DarkGray,
								borderRadius: 5,
								backgroundColor: Colors.White,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									color: Colors.DeepGray,
									fontSize: 16,
								}}
							>
								블론드
							</Text>
						</Pressable>
						<Pressable
							style={{
								width: Dimensions.width * 72,
								height: Dimensions.height * 28,
								marginTop: Dimensions.height * 20,
								marginLeft: 20,
								borderWidth: 1,
								borderStyle: 'solid',
								borderColor: Colors.DarkGray,
								borderRadius: 5,
								backgroundColor: Colors.White,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									color: Colors.DeepGray,
									fontSize: 16,
								}}
							>
								디카페인
							</Text>
						</Pressable>
						<Pressable
							style={{
								width: Dimensions.width * 91,
								height: Dimensions.height * 28,
								marginTop: Dimensions.height * 20,
								marginLeft: 20,
								borderWidth: 1,
								borderStyle: 'solid',
								borderColor: Colors.DarkGray,
								borderRadius: 5,
								backgroundColor: Colors.White,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									color: Colors.DeepGray,
									fontSize: 16,
								}}
							>
								1/2디카페인
							</Text>
						</Pressable>
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
								setOptionModalVisible(false);
							}}
						>
							<Text
								style={{ color: Colors.White, fontSize: 16, fontWeight: '700' }}
							>
								적용하기
							</Text>
						</Pressable>
					</View>
				</View>
			</Modal>

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
							style={{ fontSize: 21, color: Colors.White, fontWeight: '700' }}
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
				style={{
					width: Dimensions.width * 358,
					height: 1,
					marginTop: Dimensions.height * 27,
					backgroundColor: Colors.LightGray,
					zIndex: 1,
				}}
			></View>
			<View style={styles.BottomContainer}>
				<Text style={{ color: Colors.Black, fontSize: 14, marginBottom: 4 }}>
					총 카페인 함량
				</Text>
				<Text style={{ color: Colors.Black, fontSize: 30, fontWeight: '700' }}>
					155mg
				</Text>
				<Text
					style={{ color: Colors.Black, marginTop: Dimensions.height * 22 }}
				>
					하루 카페인 섭취 목표량의 {caffeineGoal}%
				</Text>
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
					></View>
				</View>
			</View>
			<View style={{ height: Dimensions.height * 80 }}></View>
			<Pressable
				style={{
					backgroundColor: Colors.White,
					width: '100%',
					height: Dimensions.height * 99,
					borderBottomColor: Colors.LightGray,
					borderWidth: 1,
					borderRightWidth: 0,
					borderLeftWidth: 0,
					borderTopWidth: 0,
					paddingHorizontal: Dimensions.width * 27,
					paddingTop: Dimensions.height * 37,
					flexDirection: 'row',
				}}
				onPress={() => setSizeModalVisible(true)}
			>
				<View>
					<Text
						style={{ color: Colors.Black, fontSize: 16, fontWeight: '600' }}
					>
						사이즈
					</Text>
					<Text
						style={{
							marginTop: 5 * Dimensions.height,
							fontSize: 16,
							color: Colors.DeepGray,
						}}
					>
						{selectSize} (355ml)
					</Text>
				</View>
				<BigArrow
					style={{
						marginLeft: Dimensions.width * 237,
						marginTop: Dimensions.height * 6,
					}}
				></BigArrow>
				{/* 355ml 목업데이터라 사이즈에 맞게 Ml수정 작업 필요 */}
				{/* <View style={{width:'100%',flexDirection:'row',marginTop:Dimensions.height* 15}}>
                    {Size.map((item) => {
                        return (
                            <Pressable style={{ minWidth: Dimensions.width * 39, height: Dimensions.height * 28, borderColor: Colors.DarkGray, borderWidth: 1, borderRadius: 5, paddingHorizontal: 8, paddingVertical: 4, marginRight: Dimensions.width * 19,backgroundColor:item === selectSize ? Colors.Brown : Colors.White}}
                                       onPress={()=>{setSelectSize(item)}}>
                                <Text style={{fontSize:16,color: item===selectSize?Colors.White:Colors.Black }}>{item}</Text>
                            </Pressable>
                        )
                    })}
                </View> */}
			</Pressable>
			<Pressable
				style={{
					width: '100%',
					height: Dimensions.height * 73,
					backgroundColor: Colors.White,
					borderBottomColor: Colors.LightGray,
					borderWidth: 1,
					borderRightWidth: 0,
					borderLeftWidth: 0,
					borderTopWidth: 0,
					paddingTop: Dimensions.height * 16,
					paddingHorizontal: Dimensions.width * 27,
					flexDirection: 'row',
				}}
				onPress={() => setOptionModalVisible(true)}
			>
				<View>
					<Text
						style={{ color: Colors.Black, fontSize: 16, fontWeight: '600' }}
					>
						옵션
					</Text>
					<Text
						style={{
							marginTop: 5 * Dimensions.height,
							fontSize: 16,
							color: Colors.DeepGray,
						}}
					>
						{selectTemperature}, {selectOption}
					</Text>
				</View>
				<BigArrow
					style={{
						marginLeft: Dimensions.width * 237,
						marginTop: Dimensions.height * 6,
					}}
				></BigArrow>
				{/* <View style={{width:'100%',flexDirection:'row',marginTop:Dimensions.height* 15}}>
                    {Option.map((item) => {
                        return (
                            <Pressable style={{ minWidth: Dimensions.width * 39, height: Dimensions.height * 28, borderColor: Colors.DarkGray, borderWidth: 1, borderRadius: 5, paddingHorizontal: 8, paddingVertical: 4, marginRight: Dimensions.width * 19, backgroundColor:item === selectOption ? Colors.Brown : Colors.White}}
                                       onPress={()=>{setSelectOption(item)}}>
                                <Text style={{fontSize:16,color: item===selectOption?Colors.White:Colors.Black}}>{item}</Text>
                            </Pressable>
                        )
                    })}
                </View> */}
			</Pressable>
			<View
				style={{
					width: '100%',
					height: Dimensions.height * 59,
					backgroundColor: Colors.White,
					borderBottomColor: Colors.LightGray,
					borderWidth: 1,
					borderRightWidth: 0,
					borderLeftWidth: 0,
					borderTopWidth: 0,
					paddingTop: Dimensions.height * 20,
					paddingHorizontal: Dimensions.width * 27,
					flexDirection: 'row',
				}}
			>
				<Text style={{ color: Colors.Black, fontSize: 16, fontWeight: '600' }}>
					샷 추가
				</Text>
				<View
					style={{
						flexDirection: 'row',
						marginLeft: Dimensions.width * 196,
						justifyContent: 'space-between',
						width: Dimensions.width * 92,
					}}
				>
					{caffeineCount === 0 ? (
						<DisabledBlackMinus />
					) : (
						<ActivatedBlackMinus
							width='16'
							height='16'
							viewBox='0 0 16 16'
							onPress={() => {
								if (caffeineCount != 0) setCaffeineCount(caffeineCount - 1);
							}}
						></ActivatedBlackMinus>
					)}
					<Text
						style={{ color: Colors.Black, fontSize: 16, fontWeight: '600' }}
					>
						{caffeineCount}
					</Text>
					<BlackPlus
						width='16'
						height='16'
						viewBox='0 0 16 16'
						onPress={() => {
							setCaffeineCount(caffeineCount + 1);
						}}
					></BlackPlus>
				</View>
			</View>
			<View
				style={{
					width: '100%',
					height: Dimensions.height * 59,
					backgroundColor: Colors.White,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingHorizontal: Dimensions.width * 27,
				}}
			>
				<Text style={{ fontSize: 16, color: Colors.Black, fontWeight: '600' }}>
					날짜
				</Text>
				<Pressable
					style={({ pressed }) => ({
						opacity: pressed ? 0.5 : 1,
						flexDirection: 'row',
						alignItems: 'center',
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
					<CalendarIcon
						style={{
							marginLeft: Dimensions.width * 15,
						}}
					/>
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
				<Text style={{ color: Colors.White, fontSize: 16, fontWeight: '700' }}>
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
		</SafeAreaView>
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
		position: 'absolute',
		top: Dimensions.height * 202.81,
		right: Dimensions.width * 16,
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
		borderRadius: 25,
		paddingTop: Dimensions.height * 20,
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
