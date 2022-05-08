import React from 'react';
import { CarDetailScreen } from './index';
import { fireEvent, render } from 'jest/utils';
import { Car } from 'services/GarageService/types';
import { mockedGoBack } from 'jest/setup';
import navigation from '@react-navigation/native';

const mockCar: Car = {
  id: 'dc0e179c-ec34-11e9-9a17-2b1a8ae7aa78',
  model: 'Q2 Sport Tfsi',
  make: 'Audi',
  year: 2017,
  image: {
    url: '/assets/vehicle_image-dc0e179c-ec34-11e9-9a17-2b1a8ae7aa78.jpg',
  },
};

const backButtonTestID = 'CarDetailScreen.backButton';
const useRouteSpy = jest.spyOn(navigation, 'useRoute');

describe('CarDetailScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useRouteSpy.mockReturnValue({
      params: mockCar,
      key: 'key',
      name: 'CarDetailScreen',
    });
  });
  it('should go back when press back button', () => {
    const { getByTestId } = render(<CarDetailScreen />);

    const backButtonComponent = getByTestId(backButtonTestID);
    fireEvent.press(backButtonComponent);

    expect(mockedGoBack).toBeCalled();
  });

  it('should render car infos', () => {
    const { getByText } = render(<CarDetailScreen />);

    expect(getByText(mockCar.model)).toBeDefined();
    expect(getByText(`${mockCar.make} | ${mockCar.year}`)).toBeDefined();
  });
});
