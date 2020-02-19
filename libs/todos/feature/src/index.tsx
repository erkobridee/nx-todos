import * as React from 'react';
import cn from 'classnames';

import TodoAdd from './Add';
import TodosList from './List';

import './_styles.scss';

export interface ITodosFeatureProps {
  className?: string;
}

export const TodosFeature: React.FunctionComponent<ITodosFeatureProps> = ({
  className
}) => {
  return (
    <div className={cn('todos', className)}>
      <TodoAdd className="todos__add" />
      <TodosList className="todos__list" />
    </div>
  );
};

export default TodosFeature;
