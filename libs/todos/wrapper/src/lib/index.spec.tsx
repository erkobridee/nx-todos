import React from 'react';
import { render } from '@testing-library/react';

import RootWrapper from './index';

describe('RootWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RootWrapper>
        <p>Hello Root Wrapper</p>
      </RootWrapper>
    );
    expect(baseElement).toBeTruthy();
  });
});
