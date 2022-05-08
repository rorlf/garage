import React from 'react';
import { Headline } from './index';
import { render } from 'jest/utils';

const text = 'text';

describe('Headline', () => {
  it('should render text', () => {
    const { getByText } = render(<Headline>{text}</Headline>);

    expect(getByText(text)).toBeDefined();
  });
});
