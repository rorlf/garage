import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Car } from 'services/GarageService/types';
import { useSelector } from 'store/hooks';

interface FavoriteCarsState {
  data: Car[];
}

const initialState: FavoriteCarsState = {
  data: [],
};

export const slice = createSlice({
  name: 'favoriteCars',
  initialState,
  reducers: {
    addCar: (state, action: PayloadAction<Car>) => {
      state.data.push(action.payload);
    },
    removeCar: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addCar, removeCar } = slice.actions;

export const useFavoriteCars = () => useSelector((state) => state.favoriteCars);

export default slice.reducer;
