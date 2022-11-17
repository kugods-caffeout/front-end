import { selector } from 'recoil';
import { getDrink } from '../apis/getDrink';
import { drinkState } from '../atoms/drinkState';

export const getDrinkSelector = selector({
	key: 'getDrink',
	get: async ({ get }) => {
		const { data } = await getDrink();
		return data;
	},
	set: ({ set }, newValue) => {
		set(drinkState, newValue);
	},
});
