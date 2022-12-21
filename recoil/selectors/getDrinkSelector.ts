import axios from 'axios';
import { selector } from 'recoil';
import { drink } from '../../types';
import { getDrink } from '../apis/getDrink';
import { drinkState } from '../atoms/drinkState';
import { filteredDrinkState } from '../atoms/filteredDrinkState';

function removeDuplicateDrink(originalDrinkList: drink[]) {
	return originalDrinkList.reduce(
		(previousValue: drink[], currentValue: drink) => {
			const filteredValue = previousValue.filter(
				(copiedValue) =>
					copiedValue['brand'] !== currentValue['brand'] ||
					copiedValue['drink_name'] !== currentValue['drink_name'],
			);
			return [...filteredValue, currentValue];
		},
		[],
	);
}

export const getDrinkSelector = selector<drink[]>({
	key: 'get/drink',
	get: async ({ get }) => {
		const { data } = await getDrink();
		return data.data;
	},
	set: ({ set }, newValue) => {
		set(drinkState, newValue);
	},
});

export const getFilteredDrinkSelector = selector<drink[]>({
	key: 'get/filtered_drink',
	get: async ({ get }) => {
		const { data } = await getDrink();
		const originalDrinkList = data.data;
		const newValue = removeDuplicateDrink(originalDrinkList);
		return newValue;
	},
	set: ({ set }, newValue) => {
		set(filteredDrinkState, newValue);
	},
});
