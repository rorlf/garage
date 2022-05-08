import React from 'react';
import { CarItemCard } from './index';
import { createMockStore, fireEvent, render } from 'jest/utils';
import { Car } from 'services/GarageService/types';
import { mockedNavigate } from 'jest/setup';

const mockCar: Car = {
  id: 'dc0e179c-ec34-11e9-9a17-2b1a8ae7aa78',
  model: 'Q2 Sport Tfsi',
  make: 'Audi',
  year: 2017,
  image: {
    url: '/assets/vehicle_image-dc0e179c-ec34-11e9-9a17-2b1a8ae7aa78.jpg',
  },
};

describe('CarItemCard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render car infos', () => {
    const { getByText } = render(<CarItemCard {...mockCar} />);

    expect(getByText(mockCar.model)).toBeDefined();
    expect(getByText(`${mockCar.make} | ${mockCar.year}`)).toBeDefined();
  });

  it('should navigate to CarDetailScreen when click on Card', () => {
    const testID = 'testID';
    const { getByTestId } = render(
      <CarItemCard testID={testID} {...mockCar} />
    );

    const component = getByTestId(testID);
    fireEvent.press(component);

    expect(mockedNavigate).toBeCalledWith('CarDetailScreen', mockCar);
  });

  it('should not navigate to CarDetailScreen when isDisabled', () => {
    const testID = 'testID';
    const { getByTestId } = render(
      <CarItemCard isDisabled testID={testID} {...mockCar} />
    );

    const component = getByTestId(testID);
    fireEvent.press(component);

    expect(mockedNavigate).not.toBeCalled();
  });

  it('should add car to favorites when click in star', () => {
    const store = createMockStore();
    const starTestID = 'starTestID';
    const { getByTestId } = render(
      <CarItemCard isDisabled starTestID={starTestID} {...mockCar} />,
      { store }
    );

    const starComponent = getByTestId(starTestID);
    fireEvent.press(starComponent);

    expect(store.getState().favoriteCars.data).toContainEqual(mockCar);
  });
});
