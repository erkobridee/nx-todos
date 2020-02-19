import * as React from 'react';
import cn from 'classnames';

import { ITodo } from '@nx-todos/shared/data-model';

import './_styles.scss';

export interface ITodosListItemProps {
  className?: string;
  data: ITodo;
}

export const TodosListItem: React.FunctionComponent<ITodosListItemProps> = ({
  className,
  data
}) => {
  return (
    <div className={cn('todos-list-item', className)}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TodosListItem;
