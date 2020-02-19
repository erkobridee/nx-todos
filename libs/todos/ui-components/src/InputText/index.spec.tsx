import React from 'react';
import { render } from '@testing-library/react';

import InputText from './index';

describe('InputText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputText />);
    expect(baseElement).toBeTruthy();
  });
});
