import * as React from 'react';
import { Text, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';

export default function TemperatureItem(props: {
	temperature: string;
	selectTemperatureTemp: string;
	setSelectTemperatureTemp: React.Dispatch<React.SetStateAction<string>>;
}) {
	return (
		<Pressable
			style={{
				width: Dimensions.width * 171,
				height: Dimensions.height * 40,
				borderWidth: 0.5,
				borderColor: Colors.DarkGray,
				backgroundColor:
					props.selectTemperatureTemp === props.temperature
						? Colors.Brown
						: Colors.White,
				justifyContent: 'center',
				alignItems: 'center',
			}}
			onPress={() => props.setSelectTemperatureTemp(props.temperature)}
		>
			<Text
				style={{
					fontSize: Dimensions.height * 16,
					color:
						props.selectTemperatureTemp === props.temperature
							? Colors.White
							: Colors.DeepGray,
					fontWeight: 'bold',
				}}
			>
				{props.temperature}
			</Text>
		</Pressable>
	);
}
