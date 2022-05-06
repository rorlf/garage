import { NavigatorScreenParams } from '@react-navigation/native';
import { AppTabsNavigatorParams } from 'navigators/AppTabsNavigator/types';

export type AppNavigatorParams = {
  HomeNavigator: NavigatorScreenParams<AppTabsNavigatorParams>;
  CarDetailScreen: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppNavigatorParams {}
  }
}
