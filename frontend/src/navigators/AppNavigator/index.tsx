import React from 'react';

// Dependencies
import { createStackNavigator } from '@react-navigation/stack';

// Types
import { AppNavigatorParams } from './types';

// Navigators
import { AppTabsNavigator } from 'navigators/AppTabsNavigator';

const { Navigator, Screen } = createStackNavigator<AppNavigatorParams>();

export const AppNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Screen name="HomeNavigator" component={AppTabsNavigator} />
      <Screen name="CarDetailScreen" component={EmptyScreen} />
    </Navigator>
  );
};

function EmptyScreen() {
  // @todo
  return null;
}
