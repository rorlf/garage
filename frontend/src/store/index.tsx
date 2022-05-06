import { configureStore } from '@reduxjs/toolkit';
import favoriteCarsReducer from './slices/favoriteCarsSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    favoriteCars: favoriteCarsReducer,
    theme: themeReducer,
  },
});

export default store;
