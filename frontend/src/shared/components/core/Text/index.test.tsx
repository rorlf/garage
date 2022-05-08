import React from 'react';
import { Text } from './index';
import { render } from 'jest/utils';

const text = 'text';

describe('Text', () => {
  it('should render text', () => {
    const { getByText } = render(<Text>{text}</Text>);

    expect(getByText(text)).toBeDefined();
  });
});
