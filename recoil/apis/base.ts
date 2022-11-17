import axios from 'axios';

export const API_URL =
	'http://ec2-52-78-225-87.ap-northeast-2.compute.amazonaws.com';

/* axios 공통 config */
export const axiosInstance = axios.create({
	baseURL: API_URL,
	headers: { 'Cache-Control': 'no-cache' },
});

/* baseAPI 정의 */
const baseAPI = {
	get: (url: string, data?: any) => axiosInstance.get(url, data),
	post: (url: string, data?: any) => axiosInstance.post(url, data),
	put: (url: string, data?: any) => axiosInstance.put(url, data),
	delete: (url: string, data?: any) => axiosInstance.delete(url, data),
};

export default baseAPI;

