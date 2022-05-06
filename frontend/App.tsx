import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppTabsNavigator } from 'navigators/AppTabsNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <SafeAreaView style={{ flex: 1 }}>
            <AppTabsNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
