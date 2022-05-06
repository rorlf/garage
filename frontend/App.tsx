import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AppTabsNavigator } from 'navigators/AppTabsNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppTabsNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}
