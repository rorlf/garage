import React from 'react';
import { GarageScreen } from './index';
import { render, waitForElementToBeRemoved } from 'jest/utils';
import { Car } from 'services/GarageService/types';
import * as GarageService from 'services/GarageService';

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
const getCarsSpy = jest.spyOn(GarageService, 'getCars');
const loadingTestID = 'GarageScreen.loading';
const errorTestID = 'GarageScreen.error';
const noCarsMessage = 'No cars';

describe('GarageScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getCarsSpy.mockResolvedValue({
      default: mockCars,
      items: mockCars,
    });
  });
  it('should render loading', async () => {
    const { findByTestId } = render(<GarageScreen />);

    const loadingComponent = await findByTestId(loadingTestID);

    expect(loadingComponent).toBeDefined();
  });
  it('should render error', async () => {
    getCarsSpy.mockRejectedValue('generic error');
    const { getByTestId } = render(<GarageScreen />);
    await waitForElementToBeRemoved(() => getByTestId(loadingTestID));

    expect(getByTestId(errorTestID)).toBeDefined();
  });
  it('should render screen title', async () => {
    const { getByText, getByTestId } = render(<GarageScreen />);
    await waitForElementToBeRemoved(() => getByTestId(loadingTestID));

    expect(getByText('Garage')).toBeDefined();
  });
  it('should render all cars', async () => {
    const { getByText, getByTestId } = render(<GarageScreen />);
    await waitForElementToBeRemoved(() => getByTestId(loadingTestID));

    mockCars.forEach((car) => {
      expect(getByText(car.model)).toBeDefined();
    });
  });
  it('should render message when there are no cars', async () => {
    getCarsSpy.mockResolvedValue({
      default: [],
      items: [],
    });
    const { getByText, getByTestId } = render(<GarageScreen />);
    await waitForElementToBeRemoved(() => getByTestId(loadingTestID));

    expect(getByText(noCarsMessage)).toBeDefined();
  });
});
