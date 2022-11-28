import axios from 'axios';
import { useRecoilState } from 'recoil';
import { API_URL } from './base';
import baseAPI from './base';

export function getDrink() {
	return baseAPI.get('/api/drink');
}
