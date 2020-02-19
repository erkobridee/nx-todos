import React from 'react';
import { render } from '@testing-library/react';

import NxLogo from './index';

describe('NxLogo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxLogo />);
    expect(baseElement).toBeTruthy();
  });
});
