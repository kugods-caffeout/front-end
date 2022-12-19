import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, RootTabParamList } from './types';

import SearchDrinkScreen from './screens/SearchDrinkScreen';
import DrinkDetailScreen from './screens/DrinkDetailScreen';
import HomeScreen from './screens/HomeScreen';

import HomeScreenIconSelected from './assets/homeScreenIconSelected.svg';
import HomeScreenIconUnselected from './assets/homeScreenIconUnselected.svg';
import SearchDrinkScreenIconSelected from './assets/searchDrinkScreenIconSelected.svg';
import SearchDrinkScreenIconUnselected from './assets/searchDrinkScreenIconUnselected.svg';
import Colors from './constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
				name='Root'
				component={BottomTabNavigator}
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

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	return (
		<BottomTab.Navigator
			initialRouteName='Home'
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: Colors.DarkBrown,
					borderTopWidth: 0,
					height: 48 + useSafeAreaInsets().bottom,
					paddingBottom: useSafeAreaInsets().bottom,
				},
				tabBarHideOnKeyboard: true,
				headerShown: false,
			}}
		>
			<BottomTab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? <HomeScreenIconSelected /> : <HomeScreenIconUnselected />,
				}}
			/>
			<BottomTab.Screen
				name='SearchDrink'
				component={SearchDrinkScreen}
				options={{
					tabBarIcon: ({ focused }) =>
						focused ? (
							<SearchDrinkScreenIconSelected />
						) : (
							<SearchDrinkScreenIconUnselected />
						),
				}}
			/>
		</BottomTab.Navigator>
	);
}
