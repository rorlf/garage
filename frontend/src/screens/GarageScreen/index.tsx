import React, { useCallback, useEffect, useState } from 'react';

// Services
import { getCars } from 'services';

// Components
import { View, FlatList } from 'react-native';
import {
  CarItemCard,
  ErrorContent,
  Headline,
  Loading,
} from 'shared/components';

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
    ({ item: car }: { item: Car }) => <CarItemCard {...car} />,
    []
  );

  const renderHeader = useCallback(
    () => <Headline style={styles.title}>Garage</Headline>,
    []
  );

  const renderFooter = useCallback(() => <View style={styles.footer} />, []);

  if (isLoading) return <Loading style={styles.loading} />;

  if (error)
    return (
      <ErrorContent
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
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
      />
    </View>
  );
};
