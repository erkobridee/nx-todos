import * as React from 'react';

import RootWrapper from '@nx-todos/todos/wrapper';
import Layout from '@nx-todos/todos/ui-components/Layout';
import TodosFeature from '@nx-todos/todos/feature';

import './_styles.scss';

export const App = () => {
  return (
    <RootWrapper>
      <Layout>
        <TodosFeature className="app__todos" />
      </Layout>
    </RootWrapper>
  );
};

export default App;
