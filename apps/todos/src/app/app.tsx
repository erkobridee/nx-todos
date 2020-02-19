import * as React from 'react';

import RootWrapper from '@nx-todos/todos/wrapper';

import './app.scss';

export const App = () => {
  return (
    <RootWrapper>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to todos!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
      </div>
    </RootWrapper>
  );
};

export default App;
