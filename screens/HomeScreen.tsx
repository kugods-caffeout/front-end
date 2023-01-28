import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	Pressable,
	SafeAreaView,
	Animated,
} from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import { RootStackScreenProps } from '../types';
import PlusIcon from '../assets/home-plus-icon.svg';
import Kakao from '../assets/kakao-example.svg';
import DownArrow from '../assets/arrow-down.svg';
import LeftArrow from '../assets/main-left-arrow.svg';
import RightArrow from '../assets/main-right-arrow.svg';
import { useEffect, useRef, useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function HomeScreen({
	navigation,
	route,
}: RootStackScreenProps<'Home'>) {
	const loaderValue = useRef(new Animated.Value(0)).current;
	const [isDatePickerVisible, setDatePickerVisible] = useState(false);
	const [date, setDate] = useState(new Date());

	const handleConfirm = (date: Date) => {
		hideDatePicker();
		setDate(date);
	};
	const hideDatePicker = () => {
		setDatePickerVisible(false);
	};

	const TomorrowDate = async () => {
		let promise = new Promise((resolve, reject) => {
			const current = date;
			current.setDate(current.getDate() + 1);
			resolve(current);
		});
		let result: any = await promise;
		setDate(result);
	};

	const Yesterday = async () => {
		let promise = new Promise((resolve, reject) => {
			const current = date;
			current.setDate(current.getDate() - 1);
			resolve(current);
		});
		let result: any = await promise;
		setDate(result);
	};

	const load = (amount: number) => {
		Animated.timing(loaderValue, {
			toValue: (amount / 370) * 100, //amount들어가야함
			duration: 500,
			useNativeDriver: false,
		}).start();
	};

	const width = loaderValue.interpolate({
		inputRange: [0, 100],
		outputRange: ['0%', '100%'],
		extrapolate: 'clamp',
	});

	useEffect(() => {
		load(120); //amount
	}, []);

	return (
		<SafeAreaView style={styles.topContainer}>
			<View
				style={{
					width: Dimensions.width * 390,
					height: Dimensions.height * 44,
					paddingHorizontal: 10,
					backgroundColor: Colors.White,
					justifyContent: 'space-between',
					alignItems: 'center',
					flexDirection: 'row',
				}}
			>
				<LeftArrow onPress={Yesterday} />
				<Pressable
					onPress={() => setDatePickerVisible(true)}
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Text style={{ fontSize: 24, fontWeight: 'bold' }}>
						{date.getMonth() + 1}.{date.getDate()}
					</Text>
					<DownArrow onPress={() => setDatePickerVisible(true)}></DownArrow>
				</Pressable>
				<RightArrow onPress={TomorrowDate} />
			</View>
			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode='date'
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
				display={'inline'}
				locale={'ko'}
				confirmTextIOS={'확인'}
				cancelTextIOS={'취소'}
				accentColor={Colors.Brown}
				date={date}
			/>
			<View
				style={{
					width: Dimensions.width * 390,
					height: Dimensions.height * 1,
					backgroundColor: Colors.LightGray,
				}}
			></View>
			<View
				style={{
					width: Dimensions.width * 390,
					height: Dimensions.height * 164,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: Colors.White,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'center',
						marginTop: Dimensions.height * 16,
					}}
				>
					<Text
						style={{ fontSize: 40, fontWeight: 'bold', color: Colors.Green }}
					>
						120
					</Text>
					<Text style={{ fontSize: 40, fontWeight: 'bold' }}>/</Text>
					<Text style={{ fontSize: 40, fontWeight: 'bold' }}>370</Text>
				</View>
				<View
					style={{
						width: Dimensions.width * 319,
						height: Dimensions.height * 11,
						backgroundColor: Colors.DarkGray,
						borderRadius: 30,
						marginTop: 36,
					}}
				>
					<Animated.View
						style={{
							backgroundColor: Colors.DarkBrown,
							width,
							height: Dimensions.height * 11,
							borderRadius: 30,
						}}
					></Animated.View>
				</View>
				<Text style={{ fontSize: 14, marginTop: 14 }}>
					"이 정도면 적당해요!"
				</Text>
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
				<PlusIcon></PlusIcon>
			</Pressable>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	topContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 844,
		backgroundColor: Colors.LightGray,
	},
});
