import * as React from 'react';
import { View, Dimensions, FlatList, Text, Pressable } from 'react-native';
import { RootStackScreenProps } from '../types';
import Colors from '../constants/Colors';

import DrinkItem from '../component/DrinkItem';
import { DrinkList } from '../data/DrinkList';

export default function SearchDrinkScreen({
	navigation,
}: RootStackScreenProps<'SearchDrink'>) {
	return (
		<View
			style={{
				width: Dimensions.get('window').width,
				height: Dimensions.get('window').height,
				backgroundColor: Colors.LightGray,
			}}
		>
			<FlatList
				renderItem={({ item }) => (
					<DrinkItem
						brand={item.brand}
						drinkName={item.drinkName}
						caffeine={item.caffeine}
					/>
				)}
				data={DrinkList}
			/>
		</View>
	);
}
