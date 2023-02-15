import { StyleSheet, View, Text, Pressable, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { RootStackScreenProps } from '../types';
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
					top: Dimensions.height * 257,
				}}
			/>
			<View
				style={{
					width: Dimensions.width * 311,
					height: Dimensions.height * 40,
					borderRadius: 10,
					backgroundColor: Colors.White,
					position: 'absolute',
					top: Dimensions.height * 293,
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
					height: Dimensions.height * 528,
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
							caffeine={drink.item.caffeine}
							brand={drink.item.brand}
							drinkName={drink.item.drinkName}
						/>
					)}
					data={[
						{
							caffeine: 120,
							brand: '스타벅스',
							drinkName: '돌체 콜드 브루',
						},
						{
							caffeine: 6,
							brand: '스타벅스',
							drinkName: '유자차',
						},
						{
							caffeine: 72,
							brand: '스타벅스',
							drinkName: '아메리카노',
						},
					]}
				/>
			</View>
			<Pressable
				style={{
					position: 'absolute',
					right: Dimensions.width * 34,
					bottom: useSafeAreaInsets().bottom + Dimensions.height * 60,
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
		alignItems: 'center',
	},
	boldBlackText24: {
		fontSize: Dimensions.height * 24,
		color: Colors.Black,
		fontWeight: 'bold',
	},
});
