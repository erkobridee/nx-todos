import React from 'react';
import { render } from '@testing-library/react';

import TodosList from './index';

describe(' TodosList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodosList />);
    expect(baseElement).toBeTruthy();
  });
});
