import {
	StyleSheet,
	View,
	Text,
	Pressable,
	SafeAreaView,
	Animated,
} from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { RootStackScreenProps } from '../types';
import PlusIcon from '../assets/home-plus-icon.svg';
import DownArrow from '../assets/arrow-down.svg';
import LeftArrow from '../assets/main-left-arrow.svg';
import RightArrow from '../assets/main-right-arrow.svg';
import { useEffect, useRef, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PieChart } from 'react-native-gifted-charts';

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
					backgroundColor: Colors.DarkBrown,
				}}
			>
				<PieChart
					data={[
						{ value: 85, color: '#F27400' },
						{ value: 80, color: Colors.White },
					]}
					donut={true}
					radius={Dimensions.width * 81}
					innerRadius={Dimensions.width * 74}
					innerCircleColor={Colors.White}
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
			</View>
			<Pressable
				style={{
					position: 'absolute',
					right: 34,
					bottom: 84,
					height: 60,
					width: 60,
					borderRadius: 50,
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
		backgroundColor: Colors.LightGray,
		alignItems: 'center',
	},
	boldBlackText24: {
		fontSize: Dimensions.height * 24,
		color: Colors.Black,
		fontWeight: 'bold',
	},
});
