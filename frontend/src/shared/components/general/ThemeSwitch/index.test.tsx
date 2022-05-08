import React from 'react';
import { ThemeSwitch } from './index';
import { createMockStore, fireEvent, render } from 'jest/utils';

describe('ThemeSwitch', () => {
  it('should toggle theme', () => {
    const store = createMockStore();
    const testID = 'testID';
    const { getByTestId } = render(<ThemeSwitch testID={testID} />, { store });

    const prevIsDark = store.getState().theme.isDark;

    const component = getByTestId(testID);
    fireEvent.press(component);

    const newIsDark = store.getState().theme.isDark;

    expect(newIsDark).toEqual(!prevIsDark);
  });
});
