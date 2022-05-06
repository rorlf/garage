import { createSlice } from '@reduxjs/toolkit';
import { darkColors, lightColors } from 'shared/styles/colors';
import { useSelector } from 'store/hooks';

const initialState = {
  isDark: false,
  colors: lightColors,
};

export const slice = createSlice({
  name: 'theme',
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

export default slice.reducer;
