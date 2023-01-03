import { atom } from 'recoil';
import { drink } from '../../types';

export const filteredDrinkState = atom<drink[]>({
	key: 'filteredDrinkState',
	default: [],
});
