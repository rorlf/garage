import { axiosInstance } from 'config/api';
import { CarResponse } from './types';

export async function getCars() {
  const endpoint = `/`;

  try {
    const response = await axiosInstance.get<CarResponse>(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
}
