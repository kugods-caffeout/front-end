import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';

import RightArrowIcon from '../assets/right-arrow-icon.svg';

export default function DrinkItem(props: {
	__v: number;
	_id: string;
	brand: string;
	caffeine: number;
	createdAt: string;
	drink_name: string;
	img: string;
	kcal: number;
	size: string;
	temp: string;
	updatedAt: string;
	keyWord: string;
	navigation: any;
}) {
	function createRegex(keyword: string) {
		const keywordList = keyword.split('');
		const regexList = [];
		for (let i = 0; i < keywordList.length; i++) {
			const regex = new RegExp(`[${keywordList[i]}]`);
			regexList.push(regex);
		}
		return regexList;
	}

	return (
		<Pressable
			style={({ pressed }) => ({
				opacity: pressed ? 0.5 : 1,
				width: Dimensions.width * 390,
				height: Dimensions.height * 52,
				backgroundColor: Colors.White,
				flexDirection: 'row',
				alignItems: 'center',
				paddingHorizontal: Dimensions.width * 16,
				marginBottom: 2,
				justifyContent: 'space-between',
			})}
			onPress={() => props.navigation.navigate('DrinkDetail', { drink: props })}
		>
			<View
				style={{
					width: Dimensions.width * 326,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
					}}
				>
					{props.keyWord === '' ? (
						<Text
							style={{
								color: Colors.Black,
								fontSize: 16,
							}}
						>
							{props.brand}
						</Text>
					) : (
						props.brand.split('').map((letter) => {
							for (let i = 0; i < createRegex(props.keyWord).length; i++) {
								if (letter.match(createRegex(props.keyWord)[i])) {
									return (
										<Text
											style={{
												color: Colors.Brown,
												fontSize: 16,
											}}
										>
											{letter}
										</Text>
									);
								}
							}
							return (
								<Text
									style={{
										color: Colors.Black,
										fontSize: 16,
									}}
								>
									{letter}
								</Text>
							);
						})
					)}
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						width: Dimensions.width * 254,
					}}
				>
					<View
						style={{
							flexDirection: 'row',
						}}
					>
						{props.keyWord === '' ? (
							<Text
								style={{
									color: Colors.Black,
									fontSize: 16,
								}}
							>
								{props.drink_name}
							</Text>
						) : (
							props.drink_name.split('').map((letter) => {
								for (let i = 0; i < createRegex(props.keyWord).length; i++) {
									if (letter.match(createRegex(props.keyWord)[i])) {
										return (
											<Text
												style={{
													color: Colors.Brown,
													fontSize: 16,
												}}
											>
												{letter}
											</Text>
										);
									}
								}
								return (
									<Text
										style={{
											color: Colors.Black,
											fontSize: 16,
										}}
									>
										{letter}
									</Text>
								);
							})
						)}
					</View>
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
