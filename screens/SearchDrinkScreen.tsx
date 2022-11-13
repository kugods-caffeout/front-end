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
					}}
				>
					<TextInput
						value={drinkKeyword}
						onChangeText={(keyword: string) => setDrinkKeyword(keyword)}
					></TextInput>
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
