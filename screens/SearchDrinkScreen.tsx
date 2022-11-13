import * as React from 'react';
import { View } from 'react-native';
import { RootStackScreenProps } from '../types';
import '../constants/Colors';

export default function SearchDrinkScreen({
	navigation,
}: RootStackScreenProps<'SearchDrink'>) {
	return <View style = {{ 
		width : '100%',
		height : '100%',
		backgroundColor : 'LightGray',
	}}></View>;
}
