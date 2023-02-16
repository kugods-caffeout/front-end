import React from 'react';
import { View, Text } from 'react-native';
import Dimensions from '../constants/Dimensions';
import Colors from '../constants/Colors';
import DrinkImage1 from '../assets/drink-image-sample-1.svg';

export default function HomeDrinkItem(props: {
	caffeine: number;
	brand: string;
	drinkName: string;
}) {
	return (
		<View
			style={{
				width: Dimensions.width * 176,
				height: Dimensions.height * 252,
				backgroundColor: Colors.White,
				justifyContent: 'center',
				paddingHorizontal: Dimensions.width * 20,
				paddingVertical: Dimensions.height * 13,
				borderRadius: 5,
				marginVertical: Dimensions.height * 13,
			}}
		>
			<DrinkImage1 />
			<View
				style={{
					width: Dimensions.width * 136,
					height: 1,
					backgroundColor: Colors.DarkGray,
					marginTop: Dimensions.height * 9,
					marginBottom: Dimensions.height * 16,
				}}
			/>
			<Text
				style={{
					color: Colors.Black,
					fontWeight: 'bold',
					fontSize: 25,
				}}
			>
				{props.caffeine}mg
			</Text>
			<Text
				style={{
					color: Colors.DeepGray,
					fontSize: 12,
				}}
			>
				{props.brand}
			</Text>
			<Text
				style={{
					color: Colors.Black,
					fontSize: 14,
				}}
			>
				{props.drinkName}
			</Text>
		</View>
	);
}
