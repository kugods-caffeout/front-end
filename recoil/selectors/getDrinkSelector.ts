import axios from 'axios';
import { selector } from 'recoil';
import { drink } from '../../types';
import { getDrink } from '../apis/getDrink';
import { drinkState } from '../atoms/drinkState';

export const getDrinkSelector = selector<drink[]>({
	key: 'drink',
	get: async ({ get }) => {
		const { data } = await getDrink();
		return data.data;
	},
	set: ({ set }, newValue) => set(drinkState, newValue),
});
