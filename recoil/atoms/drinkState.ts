import { atom } from 'recoil';
import { drink } from '../../types';

export const drinkState = atom<drink[]>({
	key: 'drinkState',
	default: [],
});
