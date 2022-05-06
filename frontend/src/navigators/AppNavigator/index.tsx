import React from 'react';

// Dependencies
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

// Types
import { AppNavigatorParams } from './types';

// Navigators
import { AppTabsNavigator } from 'navigators/AppTabsNavigator';

// Screens
import { CarDetailScreen } from 'screens';

const { Navigator, Screen } =
  createSharedElementStackNavigator<AppNavigatorParams>();

export const AppNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
      }}
    >
      <Screen name="AppTabsNavigator" component={AppTabsNavigator} />
      <Screen
        name="CarDetailScreen"
        component={CarDetailScreen}
        sharedElements={(route) => {
          return [`${route.params.id}`];
        }}
      />
    </Navigator>
  );
};
