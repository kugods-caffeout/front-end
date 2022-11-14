import * as React from 'react';
import {
	View,
	FlatList,
	Pressable,
	TextInput,
	StyleSheet,
} from 'react-native';
import { RootStackScreenProps } from '../types';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
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
		<View style={styles.topContainer}>
			<View style={styles.headerContainer}>
				<View style={styles.searchBarContainer}>
					<SearchIcon />
					<TextInput
						style={styles.searchBarInput}
						value={drinkKeyword}
						onChangeText={(keyword: string) => setDrinkKeyword(keyword)}
					/>
					{drinkKeyword !== '' ? (
						<Pressable
							style={({ pressed }) => [
								{
									opacity: pressed ? 0.5 : 1,
								},
								styles.clearButton,
							]}
							onPress={() => setDrinkKeyword('')}
						>
							<ClearIcon />
						</Pressable>
					) : undefined}
				</View>
			</View>

			<FlatList
				renderItem={({ item }) => (
					<DrinkItem
						brand={item.brand}
						drinkName={item.drinkName}
						caffeine={item.caffeine}
						keyWord={drinkKeyword}
					/>
				)}
				data={searchedDrinkList(DrinkList, drinkKeyword)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	topContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 844,
		backgroundColor: Colors.LightGray,
	},
	headerContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 56,
		backgroundColor: Colors.White,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 2,
	},
	searchBarContainer: {
		width: Dimensions.width * 358,
		height: Dimensions.height * 44,
		backgroundColor: Colors.LightGray,
		borderRadius: 15,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: Dimensions.width * 12,
	},
	searchBarInput: {
		width: Dimensions.width * 278,
		height: Dimensions.height * 44,
		color: Colors.Black,
	},
	clearButton: {
		width: Dimensions.width * 32,
		height: Dimensions.height * 44,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
