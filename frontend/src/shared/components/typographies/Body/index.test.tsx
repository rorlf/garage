import React from 'react';
import { Body } from './index';
import { render } from 'jest/utils';

const text = 'text';

describe('Body', () => {
  it('should render text', () => {
    const { getByText } = render(<Body>{text}</Body>);

    expect(getByText(text)).toBeDefined();
  });
});
