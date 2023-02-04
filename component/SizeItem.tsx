import * as React from 'react';
import { Text, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';

export default function SizeItem(props: {
	item: {
		size: string;
		volume: number;
	};
	selectSizeTemp: {
		size: string;
		volume: number;
	};
	setSelectSizeTemp: React.Dispatch<
		React.SetStateAction<{
			size: string;
			volume: number;
		}>
	>;
}) {
	return (
		<Pressable
			onPress={() =>
				props.setSelectSizeTemp({
					size: props.item.size,
					volume: props.item.volume,
				})
			}
			style={{
				width: Dimensions.width * 81,
				height: Dimensions.height * 121,
				borderWidth: 1,
				borderStyle: 'solid',
				borderColor: Colors.DarkGray,
				borderRadius: 10,
				backgroundColor:
					props.selectSizeTemp.size === props.item.size
						? Colors.Brown
						: Colors.White,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text
				style={{
					color:
						props.selectSizeTemp.size === props.item.size
							? Colors.White
							: Colors.DeepGray,
					fontSize: 16,
					fontWeight: '700',
				}}
			>
				{props.item.size}
			</Text>
			<Text
				style={{
					color:
						props.selectSizeTemp.size === props.item.size
							? Colors.White
							: '#C7C7C7',
					fontSize: 13,
				}}
			>
				{(props.item.volume * 29.5735).toFixed()}ml
			</Text>
		</Pressable>
	);
}
