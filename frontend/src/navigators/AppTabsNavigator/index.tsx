import React from 'react';

// Dependencies
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Types
import { AppTabsNavigatorParams } from './types';

// Screens
import { GarageScreen } from 'screens';

const { Navigator, Screen } =
  createBottomTabNavigator<AppTabsNavigatorParams>();

export const AppTabsNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="GarageScreen" component={GarageScreen} />
      <Screen name="FavoritesScreen" component={EmptyScreen} />
    </Navigator>
  );
};

function EmptyScreen() {
  // @todo
  return null;
}
