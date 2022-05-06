import { NavigatorScreenParams } from '@react-navigation/native';
import { AppTabsNavigatorParams } from 'navigators/AppTabsNavigator/types';
import { Car } from 'services/GarageService/types';

export type AppNavigatorParams = {
  AppTabsNavigator: NavigatorScreenParams<AppTabsNavigatorParams>;
  CarDetailScreen: Car;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppNavigatorParams {}
  }
}
