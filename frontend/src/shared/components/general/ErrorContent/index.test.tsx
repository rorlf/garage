import React from 'react';
import { ErrorContent } from './index';
import { fireEvent, render } from 'jest/utils';

const message = 'message';
const mockOnPressRetry = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ErrorContent', () => {
  it('should render message', () => {
    const { getByText } = render(
      <ErrorContent onPressRetry={mockOnPressRetry} message={message} />
    );

    expect(getByText(message)).toBeDefined();
  });

  it('should fire retry function', () => {
    const retryTestID = 'retryTestID';
    const { getByTestId } = render(
      <ErrorContent
        retryTestID={retryTestID}
        onPressRetry={mockOnPressRetry}
        message={message}
      />
    );
    const retryComponent = getByTestId(retryTestID);
    fireEvent.press(retryComponent);

    expect(mockOnPressRetry).toBeCalled();
  });
});
