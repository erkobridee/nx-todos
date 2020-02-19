import React from 'react';
import { render } from '@testing-library/react';

import TodoAdd from './index';

describe(' TodoAdd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoAdd />);
    expect(baseElement).toBeTruthy();
  });
});
