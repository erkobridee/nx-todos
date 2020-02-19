import * as React from 'react';
import cn from 'classnames';

import './_styles.scss';

/* eslint-disable-next-line */
export interface ITodosFeatureProps {
  className?: string;
}

export const TodosFeature: React.FunctionComponent<ITodosFeatureProps> = ({
  className
}) => {
  return (
    <div className={cn('todos', className)}>
      <h1>Welcome to todos-feature component!</h1>
    </div>
  );
};

export default TodosFeature;
