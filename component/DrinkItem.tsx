import * as React from 'react';
import { View, Dimensions, Text, Pressable, Keyboard } from 'react-native';
import Colors from '../constants/Colors';

import RightArrowIcon from '../assets/right-arrow-icon.svg';

export default function DrinkItem(props: {
	brand: string;
	drinkName: string;
	caffeine: number;
	keyWord: string;
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
					{props.keyWord == '' ?
					<Text
					style={{
						fontSize: 16,
						color: Colors.Black,
					}}
				>
						{props.drinkName}
				</Text>
						:
						<View style ={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
						<Text style={{fontSize: 16, 
								color: Colors.Black,}}>{props.drinkName.split(props.keyWord)[0]}</Text> 
						<Text style={{fontSize: 16,
								color: Colors.Brown}}>{props.keyWord}</Text> 
						<Text style={{fontSize: 16,
								color: Colors.Black,}}>{props.drinkName.split(props.keyWord)[1]}</Text>
						</View>
					}
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
