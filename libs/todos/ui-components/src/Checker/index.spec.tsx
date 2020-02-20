import React from 'react';
import { render } from '@testing-library/react';

import Checker from './index';

describe('Checker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Checker />);
    expect(baseElement).toBeTruthy();
  });
});
