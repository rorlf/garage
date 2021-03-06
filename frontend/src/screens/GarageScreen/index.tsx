import React, { useCallback, useEffect, useState } from 'react';

// Services
import { getCars } from 'services';

// Components
import { View, FlatList } from 'react-native';
import {
  Body,
  CarItemCard,
  ErrorContent,
  Headline,
  Loading,
  ThemeSwitch,
} from 'shared/components';
import { SharedElement } from 'react-navigation-shared-element';

// Types
import { Car } from 'services/GarageService/types';

// Styles
import useStyles from './styles';

export const GarageScreen = () => {
  const styles = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    obtainCars();
  }, []);

  async function obtainCars() {
    setIsLoading(true);
    setError(undefined);
    try {
      const response = await getCars();

      setCars(response.items);
    } catch (error) {
      handleError(error);
    }
    setIsLoading(false);
  }

  function handleError(error: unknown) {
    let errorMessage = 'Error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    setError(errorMessage);
  }

  const renderCarItem = useCallback(
    ({ item: car }: { item: Car }) => (
      <SharedElement id={car.id}>
        <CarItemCard {...car} />
      </SharedElement>
    ),
    []
  );

  const renderHeader = useCallback(
    () => (
      <View style={styles.header}>
        <Headline style={styles.title}>Garage</Headline>
        <ThemeSwitch />
      </View>
    ),
    [styles]
  );

  const renderEmpty = useCallback(() => <Body>No cars</Body>, []);

  const renderFooter = useCallback(() => <View style={styles.footer} />, []);

  if (isLoading)
    return <Loading testID="GarageScreen.loading" style={styles.loading} />;

  if (error)
    return (
      <ErrorContent
        testID="GarageScreen.error"
        style={styles.errorContent}
        message={error}
        onPressRetry={obtainCars}
      />
    );

  return (
    <View style={styles.screen}>
      <FlatList
        data={cars}
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
