import React from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { NavigationContainer } from '@react-navigation/native';
import { RootState } from 'store/types';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import favoriteCarsReducer from 'store/slices/favoriteCarsSlice';
import themeReducer from 'store/slices/themeSlice';

export function render(
  ui: React.ReactElement<any>,
  { store = createMockStore(), ...renderOptions } = {}
) {
  function Wrapper({ children }: { children: any }) {
    return (
      <Provider store={store}>
        <NavigationContainer>{children}</NavigationContainer>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export function createMockStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: { favoriteCars: favoriteCarsReducer, theme: themeReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    preloadedState,
  });
}

// re-export everything
export * from '@testing-library/react-native';
