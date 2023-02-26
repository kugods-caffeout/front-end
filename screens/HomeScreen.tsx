import { StyleSheet, View, Text, Pressable, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { drink, RootStackScreenProps } from '../types';
import PlusIcon from '../assets/home-plus-icon.svg';
import DownArrow from '../assets/arrow-down.svg';
import LeftArrow from '../assets/main-left-arrow.svg';
import RightArrow from '../assets/main-right-arrow.svg';
import { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PieChart } from 'react-native-gifted-charts';
import HomeDrinkItem from '../component/HomeDrinkItem';
import MonsterOrange from '../assets/monster-orange.svg';

export default function HomeScreen({
	navigation,
	route,
}: RootStackScreenProps<'Home'>) {
	const [isDatePickerVisible, setDatePickerVisible] = useState(false);
	const [date, setDate] = useState(Date.now());

	return (
		<View
			style={[
				styles.topContainer,
				{
					paddingTop: useSafeAreaInsets().top,
					paddingBottom: useSafeAreaInsets().bottom,
				},
			]}
		>
			<View
				style={{
					width: Dimensions.width * 390,
					height: Dimensions.height * 61,
					paddingHorizontal: 15,
					backgroundColor: Colors.White,
					justifyContent: 'space-between',
					alignItems: 'center',
					flexDirection: 'row',
				}}
			>
				<LeftArrow onPress={() => setDate(date - 86400000)} />
				<Pressable
					onPress={() => setDatePickerVisible(true)}
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text style={styles.boldBlackText24}>
						{new Date(date).getMonth() + 1}.{new Date(date).getDate()}
					</Text>
					<DownArrow />
				</Pressable>
				<RightArrow
					onPress={() => {
						setDate(date + 86400000);
					}}
				/>
			</View>
			<DateTimePickerModal
				date={new Date(date)}
				isVisible={isDatePickerVisible}
				mode='date'
				onConfirm={(date) => {
					setDatePickerVisible(false);
					setDate(date.getTime());
				}}
				onCancel={() => {
					setDatePickerVisible(false);
				}}
				display={'inline'}
				locale={'ko'}
				confirmTextIOS={'확인'}
				cancelTextIOS={'취소'}
				accentColor={Colors.Brown}
			/>
			<View
				style={{
					width: Dimensions.width * 390,
					height: Dimensions.height * 255,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: Colors.DarkBrown,
				}}
			>
				<View
					style={{
						width: Dimensions.width * 274,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<PieChart
						data={[
							{ value: 85, color: '#F27400' },
							{ value: 15, color: Colors.White },
						]}
						donut={true}
						radius={Dimensions.width * 81}
						innerRadius={Dimensions.width * 74}
						innerCircleColor={Colors.White}
						extraRadiusForFocused={0}
						innerCircleBorderColor={Colors.DarkGray}
						innerCircleBorderWidth={2}
						centerLabelComponent={() => {
							return (
								<View
									style={{
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Text
										style={{
											color: Colors.Black,
											fontSize: 12,
										}}
									>
										카페인 섭취
									</Text>
									<View
										style={{
											flexDirection: 'row',
											alignItems: 'baseline',
										}}
									>
										<Text
											style={{
												color: '#F27400',
												fontSize: 35,
												fontWeight: 'bold',
											}}
										>
											85
										</Text>
										<Text
											style={{
												color: Colors.Black,
												fontSize: 20,
											}}
										>
											%
										</Text>
									</View>
								</View>
							);
						}}
					/>
					<View
						style={{
							height: Dimensions.height * 90,
							borderLeftColor: Colors.White,
							borderLeftWidth: 2,
							paddingLeft: Dimensions.width * 14,
							flexDirection: 'column',
							justifyContent: 'space-around',
						}}
					>
						<View
							style={{
								width: Dimensions.width * 10,
								height: Dimensions.width * 10,
								borderRadius: Dimensions.width * 10,
								backgroundColor: '#F27400',
								position: 'absolute',
								top: 0,
								left: Dimensions.width * 14,
							}}
						/>
						<Text
							style={{
								color: Colors.White,
								fontSize: 40,
								fontWeight: 'bold',
							}}
						>
							314
						</Text>
						<View
							style={{
								width: Dimensions.width * 25,
								height: 1,
								backgroundColor: Colors.White,
							}}
						/>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'baseline',
							}}
						>
							<Text
								style={{
									color: Colors.White,
									fontSize: 20,
									fontWeight: 'bold',
								}}
							>
								370
							</Text>
							<Text
								style={{
									color: Colors.White,
									fontSize: 15,
								}}
							>
								{` mg`}
							</Text>
						</View>
					</View>
				</View>
			</View>
			<MonsterOrange
				style={{
					position: 'absolute',
					right: Dimensions.width * 58,
					top: Dimensions.height * 257 + useSafeAreaInsets().top,
				}}
			/>
			<View
				style={{
					width: Dimensions.width * 311,
					height: Dimensions.height * 40,
					borderRadius: 10,
					backgroundColor: Colors.White,
					position: 'absolute',
					top: Dimensions.height * 293 + useSafeAreaInsets().top,
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 1,
				}}
			>
				<Text
					style={{
						color: Colors.Black,
						fontSize: 14,
					}}
				>
					" 곧 카페인 하루 권장량을 초과해요!"
				</Text>
			</View>
			<View
				style={{
					width: Dimensions.width * 390,
					height: Dimensions.height * 485,
					backgroundColor: '#F6F6F6',
					paddingHorizontal: Dimensions.width * 16,
					paddingTop: Dimensions.height * 46,
					paddingBottom: useSafeAreaInsets().bottom,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginBottom: Dimensions.height * 20,
					}}
				>
					<View
						style={{
							backgroundColor: Colors.Brown,
							width: Dimensions.width * 107,
							height: Dimensions.height * 28,
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 20,
						}}
					>
						<Text
							style={{
								color: Colors.White,
								fontSize: 14,
								fontWeight: 'bold',
							}}
						>
							내가 마신 음료
						</Text>
					</View>
					<View
						style={{
							width: Dimensions.width * 241,
							height: 1,
							backgroundColor: Colors.DarkGray,
							marginTop: Dimensions.height * 9,
							marginBottom: Dimensions.height * 16,
						}}
					/>
				</View>
				<FlatList
					showsVerticalScrollIndicator={false}
					key={'-'}
					numColumns={2}
					columnWrapperStyle={{
						justifyContent: 'space-between',
					}}
					renderItem={(drink) => (
						<HomeDrinkItem
							__v={drink.item.__v}
							_id={drink.item._id}
							brand={drink.item.brand}
							caffeine={drink.item.caffeine}
							createdAt={drink.item.createdAt}
							drink_name={drink.item.drink_name}
							img={drink.item.img}
							kcal={drink.item.kcal}
							size={drink.item.size}
							temp={drink.item.temp}
							updatedAt={drink.item.updatedAt}
						/>
					)}
					data={[
						{
							_id: '636f5f8327f92fddf37761d1',
							brand: '할리스',
							drink_name: '콜드브루 라떼',
							temp: 'ICED',
							img: 'https://admin.hollys.co.kr/upload/menu/etc/menuEtc_202205100953196550.png',
							size: 'Regular',
							kcal: 190,
							caffeine: 6,
							createdAt: '2022-11-12T08:55:31.396Z',
							updatedAt: '2022-11-12T08:55:31.396Z',
							__v: 0,
						},
						{
							_id: '636f5f8327f92fddf37761db',
							brand: '할리스',
							drink_name: '에스프레소',
							temp: 'HOT',
							img: 'https://admin.hollys.co.kr/upload/menu/etc/menuEtc_202205100950557620.png',
							size: 'Regular',
							kcal: 311,
							caffeine: 93,
							createdAt: '2022-11-12T08:55:31.397Z',
							updatedAt: '2022-11-12T08:55:31.397Z',
							__v: 0,
						},
						{
							_id: '636f5fa258e81b16d1707b0a',
							brand: '스타벅스',
							drink_name: '나이트로 바닐라 크림',
							temp: '',
							img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg',
							size: '톨',
							kcal: 80,
							caffeine: 232,
							createdAt: '2022-11-12T08:56:02.053Z',
							updatedAt: '2022-11-12T08:56:02.053Z',
							__v: 0,
						},
					]}
				/>
			</View>
			<Pressable
				style={{
					position: 'absolute',
					right: Dimensions.width * 34,
					bottom: useSafeAreaInsets().bottom,
					height: Dimensions.width * 60,
					width: Dimensions.width * 60,
					borderRadius: Dimensions.width * 60,
					backgroundColor: Colors.Brown,
					justifyContent: 'center',
					alignItems: 'center',
				}}
				onPress={() => {
					navigation.navigate('SearchDrink');
				}}
			>
				<PlusIcon />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	topContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 844,
		backgroundColor: Colors.White,
		alignItems: 'center',
	},
	boldBlackText24: {
		fontSize: Dimensions.height * 24,
		color: Colors.Black,
		fontWeight: 'bold',
	},
});
