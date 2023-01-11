import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

import SearchDrinkScreen from './screens/SearchDrinkScreen';
import DrinkDetailScreen from './screens/DrinkDetailScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

export default function Navigation() {
	return (
		<NavigationContainer>
			<RootNavigator />
		</NavigationContainer>
	);
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Login'
				component={LoginScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='SearchDrink'
				component={SearchDrinkScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='DrinkDetail'
				component={DrinkDetailScreen}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
