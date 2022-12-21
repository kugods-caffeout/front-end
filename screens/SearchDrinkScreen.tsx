import * as React from 'react';
import { View, FlatList, Pressable, TextInput, StyleSheet } from 'react-native';
import { drink, RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import DrinkItem from '../component/DrinkItem';

import SearchIcon from '../assets/search-icon.svg';
import ClearIcon from '../assets/clear-icon.svg';
import { useRecoilValue } from 'recoil';
import {
	getDrinkSelector,
	getFilteredDrinkSelector,
} from '../recoil/selectors/getDrinkSelector';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SearchDrinkScreen({
	navigation,
}: RootTabScreenProps<'SearchDrink'>) {
	const [drinkKeyword, setDrinkKeyword] = React.useState('');
	const filteredSelector = useRecoilValue<drink[]>(getFilteredDrinkSelector);

	function searchedDrinkList(drinkList: drink[], keyword: string) {
		if (keyword === '') {
			return drinkList;
		} else {
			return drinkList.filter(
				(drink: drink) =>
					drink.drink_name.includes(keyword) ||
					drink.drink_name.includes(keyword.split(' ').join('')) ||
					drink.brand.includes(keyword) ||
					drink.brand.includes(keyword.split(' ').join('')),
			);
		}
	}
	return (
		<View
			style={[
				styles.topContainer,
				{
					paddingTop: useSafeAreaInsets().top,
					paddingBottom: useSafeAreaInsets().bottom,
				},
			]}
		>
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
						__v={item.__v}
						_id={item._id}
						brand={item.brand}
						caffeine={item.caffeine}
						createdAt={item.createdAt}
						drink_name={item.drink_name}
						img={item.img}
						kcal={item.kcal}
						size={item.size}
						temp={item.temp}
						updatedAt={item.updatedAt}
						keyWord={drinkKeyword}
						navigation={navigation}
					/>
				)}
				data={searchedDrinkList(filteredSelector, drinkKeyword)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	topContainer: {
		width: Dimensions.width * 390,
		height: Dimensions.height * 844,
		backgroundColor: Colors.White,
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
		backgroundColor: '#F6F6F6',
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
