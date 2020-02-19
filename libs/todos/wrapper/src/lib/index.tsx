import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import ReduxWrapper from './Redux';

const RootWrapper: React.FunctionComponent = ({ children }) => (
  <ReduxWrapper>{children}</ReduxWrapper>
);

export default hot(RootWrapper);
