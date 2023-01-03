import * as React from 'react';
import { View, Text, Pressable } from 'react-native';

import SizeItem from './SizeItem';

export default function SizeList(props: {
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
		>
			<SizeItem
				size={props.item.size}
				volume={props.item.volume}
				isSelected={props.selectSizeTemp.size === props.item.size}
			/>
		</Pressable>
	);
}
