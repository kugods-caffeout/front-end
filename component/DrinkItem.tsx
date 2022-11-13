import * as React from 'react';
import { View, Dimensions, Text, Pressable } from 'react-native';
import Colors from '../constants/Colors';

import RightArrowIcon from '../assets/right-arrow-icon.svg';

export default function DrinkItem(props: {
	brand: string;
	drinkName: string;
	caffeine: number;
}) {
	return (
		<Pressable
			style={({ pressed }) => ({
				opacity: pressed ? 0.5 : 1,
				width: Dimensions.get('window').width,
				height: 52,
				backgroundColor: Colors.White,
				flexDirection: 'row',
				alignItems: 'center',
				paddingHorizontal: 16,
				marginBottom: 2,
				justifyContent: 'space-between',
			})}
		>
			<View
				style={{
					width: Dimensions.get('window').width * 0.8,
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Text
					style={{
						fontSize: 16,
						color: Colors.Black,
					}}
				>
					{props.brand}
				</Text>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						width: Dimensions.get('window').width * 0.6,
					}}
				>
					<Text
						style={{
							fontSize: 16,
							color: Colors.Black,
						}}
					>
						{props.drinkName}
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: Colors.Black,
						}}
					>
						{props.caffeine}mg
					</Text>
				</View>
			</View>
			<RightArrowIcon />
		</Pressable>
	);
}
