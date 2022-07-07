import axios, { AxiosResponse } from 'axios';
import { Fetcher } from 'swr';

export const fetcher: Fetcher = async (url: string) => {
	const response: AxiosResponse = await axios.get(url);
	return response.data;
};
