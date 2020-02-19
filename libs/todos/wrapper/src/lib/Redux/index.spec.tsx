import React from 'react';
import { render } from '@testing-library/react';

import ReduxWrapper from './index';

describe('ReduxWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ReduxWrapper>
        <p>Hello Redux Wrapper</p>
      </ReduxWrapper>
    );
    expect(baseElement).toBeTruthy();
  });
});
