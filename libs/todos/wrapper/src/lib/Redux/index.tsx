import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@nx-todos/todos/redux';

const ReduxWrapper: React.FunctionComponent = ({ children }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

export default ReduxWrapper;
