import React from 'react';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

// Components
import { View, TouchableOpacity } from 'react-native';
import { CarItemCard } from 'shared/components';
import { FontAwesome } from '@expo/vector-icons';
import { SharedElement } from 'react-navigation-shared-element';

// Types
import { AppNavigatorParams } from 'navigators/AppNavigator/types';

// Hooks
import { useTheme } from 'store/slices/themeSlice';

// Styles
import useStyles from './styles';

type ScreenRouteProp = RouteProp<AppNavigatorParams, 'CarDetailScreen'>;
type ScreenNavigationProp = NavigationProp<
  AppNavigatorParams,
  'CarDetailScreen'
>;

export const CarDetailScreen = () => {
  const styles = useStyles();
  const { colors } = useTheme();
  const { goBack } = useNavigation<ScreenNavigationProp>();
  const { params: car } = useRoute<ScreenRouteProp>();

  return (
    <View style={styles.screen}>
      <TouchableOpacity
        testID="CarDetailScreen.backButton"
        onPress={goBack}
        style={styles.backButtonContainer}
      >
        <FontAwesome size={30} color={colors.textColor} name="arrow-left" />
      </TouchableOpacity>
      <SharedElement id={car.id}>
        <CarItemCard isDisabled {...car} />
      </SharedElement>
    </View>
  );
};
