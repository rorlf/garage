import React from 'react';

// Dependencies
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

// Types
import { AppNavigatorParams } from './types';

// Navigators
import { AppTabsNavigator } from 'navigators/AppTabsNavigator';

// Screens
import { CarDetailScreen } from 'screens';

// Hooks
import { useTheme } from 'store/slices/themeSlice';

// Styles
import useStyles from './styles';

const { Navigator, Screen } =
  createSharedElementStackNavigator<AppNavigatorParams>();

export const AppNavigator = () => {
  const styles = useStyles();
  const { isDark, colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        style={isDark ? 'light' : 'dark'}
        backgroundColor={colors.screenBackground}
      />
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
    </SafeAreaView>
  );
};
