import React, { useMemo } from 'react';

// Config
import { baseUrl } from 'config/api';

// Components
import { View, Image } from 'react-native';
import { Body, Title } from 'shared/components/typographies';
import { Star } from 'shared/components/general/Star';

// Store
import {
  addCar,
  removeCar,
  useFavoriteCars,
} from 'store/slices/favoriteCarsSlice';

// Types
import { Car } from 'services/GarageService/types';

// Hooks
import { useDispatch } from 'store/hooks';

// Styles
import useStyles from './styles';

export const CarItemCard = (car: Car) => {
  const { id, image, make, model, year } = car;
  const dispatch = useDispatch();
  const styles = useStyles();
  const imageSource = useMemo(() => ({ uri: baseUrl + image.url }), [image]);
  const { data: favoriteCars } = useFavoriteCars();
  const isFavorite = useMemo(
    () => favoriteCars.some((favoriteCar) => favoriteCar.id === id),
    [favoriteCars]
  );

  function onPressStar() {
    if (isFavorite) {
      dispatch(removeCar(car.id));
      return;
    }
    dispatch(addCar(car));
  }

  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.carImage} />
      <View style={styles.details}>
        <View style={styles.header}>
          <Title style={styles.model}>{model}</Title>
          <Star onPress={onPressStar} isActive={isFavorite} />
        </View>
        <View style={styles.line} />
        <Body style={styles.makeYear}>
          {make} | {year}
        </Body>
      </View>
    </View>
  );
};
