import * as React from 'react';
import { View } from 'react-native';
import { RootStackScreenProps } from '../types';
import '../constants/Colors';

export default function SignInScreen({
	navigation,
}: RootStackScreenProps<'SignIn'>) {
	return <View style = {{ 
		width : '100%',
		height : '100%',
		backgroundColor : 'LightGray',
	}}></View>;
}
