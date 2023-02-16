import axios from 'axios';
import { AUTH_TOKEN } from '@env';
export const API_URL = 'http://52.78.225.87';

/* axios 공통 config */
export const axiosInstance = axios.create({
	baseURL: API_URL,
	headers: { 'Authorization': `Bearer ${AUTH_TOKEN}` },
});

/* baseAPI 정의 */
const baseAPI = {
	get: (url: string, data?: any) => axiosInstance.get(url, data),
	post: (url: string, data?: any) => axiosInstance.post(url, data),
	put: (url: string, data?: any) => axiosInstance.put(url, data),
	delete: (url: string, data?: any) => axiosInstance.delete(url, data),
};

export default baseAPI;
