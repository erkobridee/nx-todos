import * as React from 'react';

import RootWrapper from '@nx-todos/todos/wrapper';
import { Layout } from '@nx-todos/todos/ui-components';

import './_styles.scss';

export const App = () => {
  return (
    <RootWrapper>
      <Layout>
        <p>Content comming from the ToDos application</p>
      </Layout>
    </RootWrapper>
  );
};

export default App;
