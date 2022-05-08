import React from 'react';
import { Star } from './index';
import { fireEvent, render } from 'jest/utils';

const mockOnPress = jest.fn();

describe('Star', () => {
  it('should fire onPress function', () => {
    const testID = 'testID';
    const { getByTestId } = render(
      <Star isActive testID={testID} onPress={mockOnPress} />
    );
    const component = getByTestId(testID);
    fireEvent.press(component);

    expect(mockOnPress).toBeCalled();
  });
});
