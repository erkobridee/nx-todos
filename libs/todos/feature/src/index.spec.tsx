import React from 'react';
import { render } from '@testing-library/react';

import TodosFeature from './index';

describe(' TodosFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodosFeature />);
    expect(baseElement).toBeTruthy();
  });
});
