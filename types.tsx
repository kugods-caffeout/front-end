import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

export type RootStackParamList = {
	SearchDrink: undefined;
	DrinkDetail: undefined;
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
