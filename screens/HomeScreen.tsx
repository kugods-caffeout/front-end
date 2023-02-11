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
	const [initalDate, setInitalDate] = useState(new Date());

	const ShowDatePicker = () => {
		setDatePickerVisible(true);
	};
	const handleConfirm = (date: Date) => {
		hideDatePicker();
		setInitalDate(date);
	};
	const hideDatePicker = () => {
		setDatePickerVisible(false);
	};

	const TomorrowDate = () => {
		const newDate = new Date(initalDate)
		newDate.setDate(newDate.getDate() + 1);
		setInitalDate(newDate);  //달라지려면 state 변화 뿐만 아니라 reference변화도 동반되어야,,
	};

	// const Yesterday = async () => {
	// 	let promise = new Promise((resolve, reject) => {
	// 		const current = initalDate;
	// 		current.setDate(current.getDate() - 1);
	// 		resolve(current);
	// 	});
	// 	let result: any = await promise;
	// 	setInitalDate(result);
	// 	console.log(result);
	// };
	const Yesterday = async () => {
		const newDate = new Date(initalDate)
		newDate.setDate(newDate.getDate() - 1);
		setInitalDate(newDate)
	};

	const load = (amount: number) => {
		Animated.timing(loaderValue, {
			toValue: (amount / 370) * 100, //amount들어가야함
			duration: 2000,
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
				<Pressable onPress={ShowDatePicker} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ fontSize: 24, fontWeight: 'bold' }}>{initalDate.getMonth() + 1}.{initalDate.getDate()}</Text>
					<DownArrow onPress={ShowDatePicker}></DownArrow>
				</Pressable>
				<RightArrow onPress={TomorrowDate} />
			</View>
			<DateTimePickerModal
        	isVisible={isDatePickerVisible}
        	mode="date"
        	onConfirm={handleConfirm}
			onCancel={hideDatePicker}
			display={'inline'}
			locale={'ko'}
			confirmTextIOS={'확인'}
			cancelTextIOS={'취소'}
			accentColor={Colors.Brown}
			date={initalDate}	
      		/>
			<View style={{width:Dimensions.width * 390, height:Dimensions.height*1, backgroundColor:Colors.LightGray}}></View>
			<View style={{ width: Dimensions.width * 390, height: Dimensions.height * 164,justifyContent:'center',alignItems:'center',backgroundColor:Colors.White}}>
				<View style={{flexDirection:'row',justifyContent:'center',marginTop: Dimensions.height * 16}}>
					<Text style={{ fontSize: 40, fontWeight: 'bold' , color:Colors.Green}}>120</Text>
					<Text style={{ fontSize: 40, fontWeight: 'bold' }}>/</Text>
					<Text style={{ fontSize: 40, fontWeight: 'bold' }}>370</Text>
				</View>
				<View style={{width: Dimensions.width * 319, height: Dimensions.height*11, backgroundColor:Colors.DarkGray, borderRadius:30,marginTop:36}}>
					<Animated.View
					style={{
						backgroundColor: Colors.DarkBrown,
						width,
							height: Dimensions.height * 11,
							borderRadius: 30,
						
						}}>
					</Animated.View>
					<Animated.Image
						source={{uri:'https://www.clipartmax.com/png/middle/252-2526984_%ED%94%84%EB%A0%8C%EC%A6%88%ED%8C%9D-%EB%9D%BC%EC%9D%B4%EC%96%B8-png-%ED%94%BC%ED%81%AC%EB%8B%89%EB%9D%BC%EC%9D%B4%EC%96%B8-%ED%9B%84%EB%93%9C%EB%9D%BC%EC%9D%B4%EC%96%B8-kakao-friends-ryan-png.png'}}
						style={{
							bottom: -20, //확실한거 없나,,
							left:-20,	
							height: Dimensions.height * 50,
							resizeMode:'contain',
							marginLeft: width, //네
							position: 'absolute',
						}}
					/>
				</View>
				<Text style={{ fontSize: 14, marginTop: 14 }}>
					"이 정도면 적당해요!"
				</Text>
			</View>
			<Pressable style={{ position: 'absolute', right: 34, bottom: 84, height: 60, width: 60, borderRadius: 50, backgroundColor: Colors.Brown, justifyContent: 'center', alignItems: 'center' }}
			onPress={()=>{navigation.navigate('SearchDrink')}}> 
				<PlusIcon></PlusIcon>
			</Pressable>
		</SafeAreaView>
	);
}//아니 그래서 내가 한 건 버리는거야? 슬프구만

const styles = StyleSheet.create({
	topContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 844,
		backgroundColor: Colors.LightGray,
	},
});
