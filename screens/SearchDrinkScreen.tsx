import * as React from 'react';
import {
	View,
	Dimensions,
	FlatList,
	Text,
	Pressable,
	TextInput,
} from 'react-native';
import { RootStackScreenProps } from '../types';
import Colors from '../constants/Colors';

import DrinkItem from '../component/DrinkItem';
import { DrinkList } from '../data/DrinkList';

import SearchIcon from '../assets/search-icon.svg';
import ClearIcon from '../assets/clear-icon.svg';

export default function SearchDrinkScreen({
	navigation,
}: RootStackScreenProps<'SearchDrink'>) {
	const [drinkKeyword, setDrinkKeyword] = React.useState('');

	function searchedDrinkList(drinkList: typeof DrinkList, keyword: string) {
		if (keyword === '') {
			return drinkList;
		} else {
			return drinkList.filter((drink: any) =>
				drink.drinkName.includes(keyword),
			);
		}
	}
	return (
		<View
			style={{
				width: Dimensions.get('window').width,
				height: Dimensions.get('window').height,
				backgroundColor: Colors.LightGray,
			}}
		>
			<View
				style={{
					width: Dimensions.get('window').width,
					height: 56,
					backgroundColor: Colors.White,
					justifyContent: 'center',
					alignItems: 'center',
					marginBottom: 2,
				}}
			>
				<View
					style={{
						width: 358,
						height: 44,
						backgroundColor: Colors.LightGray,
						borderRadius: 15,
						flexDirection: 'row',
						alignItems: 'center',
						paddingHorizontal: 12,
					}}
				>
					<SearchIcon />
					<TextInput
						style={{
							width: Dimensions.get('window').width * 0.73,
						}}
						value={drinkKeyword}
						onChangeText={(keyword: string) => setDrinkKeyword(keyword)}
					/>
					<Pressable
						style={({ pressed }) => ({
							opacity: pressed ? 0.5 : 1,
							width: 32,
							height: 32,
							justifyContent: 'center',
							alignItems: 'center',
						})}
						onPress={() => setDrinkKeyword('')}
					>
						<ClearIcon />
					</Pressable>
				</View>
			</View>

			<FlatList
				renderItem={({ item }) => (
					<DrinkItem
						brand={item.brand}
						drinkName={item.drinkName}
						caffeine={item.caffeine}
					/>
				)}
				data={searchedDrinkList(DrinkList, drinkKeyword)}
			/>
		</View>
	);
}
