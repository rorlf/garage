import React from 'react';

// Dependencies
import { createStackNavigator } from '@react-navigation/stack';

// Types
import { AppNavigatorParams } from './types';

// Navigators
import { AppTabsNavigator } from 'navigators/AppTabsNavigator';

// Screens
import { CarDetailScreen } from 'screens';

const { Navigator, Screen } = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Screen name="AppTabsNavigator" component={AppTabsNavigator} />
      <Screen name="CarDetailScreen" component={CarDetailScreen} />
    </Navigator>
  );
};
