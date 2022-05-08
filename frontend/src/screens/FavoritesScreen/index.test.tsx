import React from 'react';
import { FavoritesScreen } from './index';
import { createMockStore, fireEvent, render } from 'jest/utils';
import { Car } from 'services/GarageService/types';
import { mockedNavigate } from 'jest/setup';

const mockCars: Car[] = [
  {
    id: '155fa5ae-00a0-11ea-84e3-4371baa68b28',
    model: 'RS7 4.0',
    make: 'Audi',
    year: 2015,
    image: {
      url: '/assets/vehicle_image-155fa5ae-00a0-11ea-84e3-4371baa68b28.jpg',
    },
  },
  {
    id: '206b3cd8-00a0-11ea-a1de-278776d54145',
    model: 'A6 50',
    make: 'Audi',
    year: 2013,
    image: {
      url: '/assets/vehicle_image-206b3cd8-00a0-11ea-a1de-278776d54145.jpg',
    },
  },
];

const noCarsMessage = 'Add cars to favorites';

describe('FavoritesScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render screen title', () => {
    const { getByText } = render(<FavoritesScreen />);

    expect(getByText('Favorites')).toBeDefined();
  });
  it('should render all cars', () => {
    const store = createMockStore({
      favoriteCars: {
        data: mockCars,
        _persist: { version: 1, rehydrated: true },
      },
    });
    const { getByText } = render(<FavoritesScreen />, { store });

    mockCars.forEach((car) => {
      expect(getByText(car.model)).toBeDefined();
    });
  });

  it('should render message when there are no favorite cars', () => {
    const { getByText } = render(<FavoritesScreen />);

    expect(getByText(noCarsMessage)).toBeDefined();
  });

  it('should navigate to GarageScreen when there are no favorite cars and click on the message', () => {
    const { getByText } = render(<FavoritesScreen />);

    const messageComponent = getByText(noCarsMessage);
    fireEvent.press(messageComponent);

    expect(mockedNavigate).toBeCalledWith('GarageTab');
  });
});
