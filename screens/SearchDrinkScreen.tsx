import * as React from 'react';
import {
	View,
	FlatList,
	Pressable,
	TextInput,
	StyleSheet,
	Text,
} from 'react-native';
import { drink, RootStackScreenProps } from '../types';
import Colors from '../constants/Colors';
import Dimensions from '../constants/Dimensions';
import DrinkItem from '../component/DrinkItem';

import SearchIcon from '../assets/search-icon.svg';
import ClearIcon from '../assets/clear-icon.svg';
import { useRecoilValue } from 'recoil';
import { getDrinkSelector } from '../recoil/selectors/getDrinkSelector';

export default function SearchDrinkScreen({
	navigation,
}: RootStackScreenProps<'SearchDrink'>) {
	const [drinkKeyword, setDrinkKeyword] = React.useState('');
	const drinkSelector = useRecoilValue<drink[]>(getDrinkSelector);

	function searchedDrinkList(drinkList: drink[], keyword: string) {
		if (keyword === '') {
			return drinkList;
		} else {
			return drinkList.filter((drink: drink) =>
				drink.drink_name.includes(keyword),
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
			<React.Suspense
				fallback={
					<View style={styles.topContainer}>
						<Text style={{ color: 'red', fontSize: 30, fontWeight: 'bold' }}>
							로딩중...
						</Text>
					</View>
				}
			>
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
						/>
					)}
					data={searchedDrinkList(drinkSelector, drinkKeyword)}
				/>
			</React.Suspense>
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
