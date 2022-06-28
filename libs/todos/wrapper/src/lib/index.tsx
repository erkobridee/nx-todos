import * as React from 'react';

import ReduxWrapper from './Redux';

const RootWrapper: React.FunctionComponent<React.PropsWithChildren> = ({
  children,
}) => <ReduxWrapper>{children}</ReduxWrapper>;

export default RootWrapper;
