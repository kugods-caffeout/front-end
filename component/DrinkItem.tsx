import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';

import BalckStarIcon from '../assets/black-star.svg'; //이거 svg 조금 깨지는 것 같음 확인바람
import YellowStarIcon from '../assets/yellow-star.svg';
import RightArrowIcon from '../assets/right-arrow-icon.svg';
import { SafeAreaView } from 'react-native-safe-area-context';

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

	const [isFavorite, setIsFavorite] = React.useState(false); //데이터 받아와여,,
	return (
		<View
			style={{
				width: '100%',
				height: Dimensions.height * 74,
				borderTopColor: Colors.LightGray,
				borderWidth: 1,
				flexDirection: 'row',
				borderBottomColor: Colors.White,
				borderLeftColor: Colors.White,
				borderRightColor: Colors.White,
				alignItems: 'center',
			}}
		>
			<View
				style={{
					width: Dimensions.width * 50,
					alignSelf: 'baseline',
					marginTop: 15,
					paddingLeft: 16,
				}}
			>
				{isFavorite ? (
					<YellowStarIcon
						onPress={() => {
							setIsFavorite(!isFavorite);
						}}
					/>
				) : (
					<BalckStarIcon
						onPress={() => {
							setIsFavorite(!isFavorite);
						}}
					/>
				)}
			</View>
			<Pressable
				style={({ pressed }) => ({
					opacity: pressed ? 0.5 : 1,
					width: Dimensions.width * 340,
					height: Dimensions.height * 70,
					backgroundColor: Colors.White,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				})}
				onPress={() =>
					props.navigation.navigate('DrinkDetail', { drink: props })
				}
			>
				<View
					style={{
						width: Dimensions.width * 230,
					}}
				>
					<View
						style={{
							justifyContent: 'space-between',
							width: Dimensions.width * 230,
							marginTop: 10,
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
					</View>
					<View
						style={{
							flexDirection: 'row',
							marginVertical: 10,
						}}
					>
						{props.keyWord === '' ? (
							<Text
								style={{
									color: Colors.Black,
									fontSize: 14,
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
				</View>
				<Text
					style={{
						fontSize: 16,
						width: Dimensions.width * 60,
						color: Colors.Black,
						fontWeight: 'bold',
						textAlign: 'right',
					}}
				>
					{props.caffeine}mg
				</Text>
				<RightArrowIcon style={{ right: 10 }} />
			</Pressable>
		</View>
	);
}
