import React, { useCallback } from 'react';

// Components
import { View, FlatList } from 'react-native';
import { Body, CarItemCard, Headline, ThemeSwitch } from 'shared/components';

// Types
import { Car } from 'services/GarageService/types';
import { AppTabsNavigatorParams } from 'navigators/AppTabsNavigator/types';

// Hooks
import { useFavoriteCars } from 'store/slices/favoriteCarsSlice';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// Styles
import useStyles from './styles';

type ScreenNavigationProp = NavigationProp<
  AppTabsNavigatorParams,
  'FavoritesScreen'
>;

export const FavoritesScreen = () => {
  const { navigate } = useNavigation<ScreenNavigationProp>();
  const styles = useStyles();
  const { data: favoriteCars } = useFavoriteCars();

  function onPressAddCars() {
    navigate('GarageScreen');
  }

  const renderCarItem = useCallback(
    ({ item: car }: { item: Car }) => <CarItemCard {...car} />,
    []
  );

  const renderHeader = useCallback(
    () => (
      <View style={styles.header}>
        <Headline style={styles.title}>Favorites</Headline>
        <ThemeSwitch />
      </View>
    ),
    [styles]
  );

  const renderEmpty = useCallback(
    () => (
      <Body style={styles.emptyLabel} onPress={onPressAddCars}>
        Add cars to favorites
      </Body>
    ),
    []
  );

  const renderFooter = useCallback(() => <View style={styles.footer} />, []);

  return (
    <View style={styles.screen}>
      <FlatList
        data={favoriteCars}
        renderItem={renderCarItem}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      />
    </View>
  );
};
