import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	Home: undefined;
	DrinkDetail: { drink: drink };
	SearchDrink: undefined;
	Login: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>;

export interface drink {
	__v: number;
	_id: string;
	brand: string;
	caffeine: number;
	createdAt: string;
	drink_name: string;
	img: string;
	kcal: number;
	size: string;
	temp: string;
	updatedAt: string;
}
