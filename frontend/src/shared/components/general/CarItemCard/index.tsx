import React, { useMemo } from 'react';

// Config
import { baseUrl } from 'config/api';

// Components
import { View, Image, TouchableOpacity } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';

// Styles
import useStyles from './styles';

interface Props extends Car {
  isDisabled?: boolean;
  testID?: string;
  starTestID?: string;
}

export const CarItemCard = ({
  isDisabled,
  testID,
  starTestID,
  ...car
}: Props) => {
  const { navigate } = useNavigation();
  const { id, image, make, model, year } = car;
  const dispatch = useDispatch();
  const styles = useStyles();
  const imageSource = useMemo(() => ({ uri: baseUrl + image.url }), [image]);
  const { data: favoriteCars } = useFavoriteCars();
  const isFavorite = useMemo(
    () => favoriteCars.some((favoriteCar) => favoriteCar.id === id),
    [favoriteCars]
  );

  function onPressCar() {
    navigate('CarDetailScreen', car);
  }

  function onPressStar() {
    if (isFavorite) {
      dispatch(removeCar(car.id));
      return;
    }
    dispatch(addCar(car));
  }

  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPressCar}
      style={styles.card}
      testID={testID}
    >
      <Image source={imageSource} style={styles.carImage} />
      <View style={styles.details}>
        <View style={styles.header}>
          <Title>{model}</Title>
          <Star
            testID={starTestID}
            onPress={onPressStar}
            isActive={isFavorite}
          />
        </View>
        <View style={styles.line} />
        <Body style={styles.makeYear}>
          {make} | {year}
        </Body>
      </View>
    </TouchableOpacity>
  );
};
