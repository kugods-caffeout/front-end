import * as React from 'react';
import { Text, Pressable, View } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';

export default function SizeItem(props: {
	size: string;
	volume: number;
	isSelected: boolean;
}) {
	return (
		<View
			style={{
				width: Dimensions.width * 81,
				height: Dimensions.height * 121,
				borderWidth: 1,
				borderStyle: 'solid',
				borderColor: Colors.DarkGray,
				borderRadius: 10,
				backgroundColor: props.isSelected ? Colors.Brown : Colors.White,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text
				style={{
					color: props.isSelected ? Colors.White : Colors.DeepGray,
					fontSize: 16,
					fontWeight: '700',
				}}
			>
				{props.size}
			</Text>
			<Text
				style={{
					color: props.isSelected ? Colors.White : '#C7C7C7',
					fontSize: 13,
				}}
			>
				{props.volume}ml
			</Text>
		</View>
	);
}
