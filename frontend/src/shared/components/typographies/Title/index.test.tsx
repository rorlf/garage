import React from 'react';
import { Title } from './index';
import { render } from 'jest/utils';

const text = 'text';

describe('Title', () => {
  it('should render text', () => {
    const { getByText } = render(<Title>{text}</Title>);

    expect(getByText(text)).toBeDefined();
  });
});
