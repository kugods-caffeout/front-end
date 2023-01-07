import * as React from 'react';
import { Text, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';

export default function AdditionalOptionList(props: {
	item: {
		option: string;
		multiplier: number;
	};
	selectAdditionalOpitonTemp: {
		option: string;
		multiplier: number;
	};
	setSelectAdditionalOptionTemp: React.Dispatch<
		React.SetStateAction<{
			option: string;
			multiplier: number;
		}>
	>;
}) {
	return (
		<Pressable
			style={{
				paddingHorizontal: Dimensions.width * 8,
				height: Dimensions.height * 28,
				borderWidth: 1,
				borderColor: Colors.DarkGray,
				borderRadius: 5,
				backgroundColor:
					props.selectAdditionalOpitonTemp.option === props.item.option
						? Colors.Brown
						: Colors.White,
				justifyContent: 'center',
				alignItems: 'center',
			}}
			onPress={() => props.setSelectAdditionalOptionTemp(props.item)}
		>
			<Text
				style={{
					color:
						props.selectAdditionalOpitonTemp.option === props.item.option
							? Colors.White
							: Colors.DeepGray,
					fontSize: Dimensions.height * 16,
				}}
			>
				{props.item.option}
			</Text>
		</Pressable>
	);
}
