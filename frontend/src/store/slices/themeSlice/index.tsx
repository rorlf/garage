import { createSlice } from '@reduxjs/toolkit';
import { darkColors, lightColors } from 'shared/styles/colors';
import { useSelector } from 'store/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  isDark: false,
  colors: lightColors,
};

const key = 'theme';

export const slice = createSlice({
  name: key,
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.isDark) {
        state.isDark = false;
        state.colors = lightColors;
      } else {
        state.isDark = true;
        state.colors = darkColors;
      }
    },
  },
});

export const { toggleTheme } = slice.actions;

export const useTheme = () => useSelector((state) => state.theme);

const persistConfig = {
  key,
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, slice.reducer);

export default persistedReducer;
