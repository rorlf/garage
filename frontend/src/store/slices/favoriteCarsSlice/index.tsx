import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { Car } from 'services/GarageService/types';
import { useSelector } from 'store/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FavoriteCarsState {
  data: Car[];
}

const initialState: FavoriteCarsState = {
  data: [],
};

const key = 'favoriteCars';

export const slice = createSlice({
  name: key,
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

const persistConfig = {
  key,
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, slice.reducer);

export default persistedReducer;
