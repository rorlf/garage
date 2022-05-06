import React from 'react';

// Dependencies
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Types
import { AppTabsNavigatorParams } from './types';

// Components
import { FontAwesome } from '@expo/vector-icons';

// Screens
import { FavoritesScreen, GarageScreen } from 'screens';

// Hooks
import { useTheme } from 'store/slices/themeSlice';

// Utils
import { wrapInSharedElementStack } from 'shared/utils/navigators';

// Styles
import useStyles from './styles';

const { Navigator, Screen } =
  createBottomTabNavigator<AppTabsNavigatorParams>();

const GarageTab = wrapInSharedElementStack(GarageScreen, 'GarageScreen');
const FavoritesTab = wrapInSharedElementStack(
  FavoritesScreen,
  'FavoritesScreen'
);

export const AppTabsNavigator = () => {
  const { colors } = useTheme();
  const styles = useStyles();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarInactiveTintColor: colors.divisorColor,
        tabBarActiveTintColor: colors.textColor,
      }}
    >
      <Screen
        name="GarageTab"
        component={GarageTab}
        options={{
          tabBarLabel: 'Garage',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="car" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="FavoritesTab"
        component={FavoritesTab}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="star" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
};
