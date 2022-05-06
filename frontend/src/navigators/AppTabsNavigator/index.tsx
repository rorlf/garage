import React from 'react';

// Dependencies
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Types
import { AppTabsNavigatorParams } from './types';

// Screens
import Garage from 'screens/Garage';

const { Navigator, Screen } =
  createBottomTabNavigator<AppTabsNavigatorParams>();

export const AppTabsNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="GarageScreen" component={Garage} />
      <Screen name="FavoritesScreen" component={EmptyScreen} />
    </Navigator>
  );
};

function EmptyScreen() {
  // @todo
  return null;
}
