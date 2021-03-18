import * as React from 'react';
import cn from 'clsx';

import TodoAdd from './Add';
import TodosList from './List';

import './_styles.scss';

export interface ITodosFeatureProps {
  className?: string;
}

export const TodosFeature: React.FunctionComponent<ITodosFeatureProps> = ({
  className,
}) => {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <div className={cn('todos', className)}>
      <TodoAdd className="todos__add" disabled={isEditing} />
      <TodosList className="todos__list" onEditing={setIsEditing} />
    </div>
  );
};

export default TodosFeature;
