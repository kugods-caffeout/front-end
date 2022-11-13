import * as React from 'react';
import { View, Dimensions, FlatList, Text, Pressable } from 'react-native';
import { RootStackScreenProps } from '../types';
import Colors from '../constants/Colors';

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
								{item.brand}
							</Text>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
									width: Dimensions.get('window').width * 0.6,
								}}
							>
								<Text
									style={{
										fontSize: 16,
										color: Colors.Black,
									}}
								>
									{item.drinkName}
								</Text>
								<Text
									style={{
										fontSize: 16,
										color: Colors.Black,
									}}
								>
									{item.caffeine}mg
								</Text>
							</View>
						</View>
					</Pressable>
				)}
				data={[
					{
						brand: '스타벅스',
						drinkName: '돌체 콜드 브루',
						caffeine: 155,
					},
					{
						brand: '스타벅스',
						drinkName: '스타벅스 돌체 라떼',
						caffeine: 150,
					},
					{
						brand: '스타벅스',
						drinkName: '아이스 스타벅스 돌체 라떼',
						caffeine: 150,
					},
					{
						brand: '스타벅스',
						drinkName: '돌체 블랙 밀크 티 ',
						caffeine: 60,
					},
				]}
			></FlatList>
		</View>
	);
}
