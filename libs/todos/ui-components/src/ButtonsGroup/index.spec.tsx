import React from 'react';
import { render } from '@testing-library/react';

import Button from '@nx-todos/todos/ui-components/Button';

import ButtonsGroupd from './index';

describe('ButtonsGroupd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ButtonsGroupd>
        <Button>a</Button>
        <Button>b</Button>
      </ButtonsGroupd>
    );
    expect(baseElement).toBeTruthy();
  });
});
