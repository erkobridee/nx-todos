import * as React from 'react';

import './_styles.scss';

export const Layout: React.FunctionComponent = ({ children }) => (
  <>
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to todos!</h1>
      <img
        width="100"
        src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
      />
    </div>
    <div>{children}</div>
  </>
);

export default Layout;
