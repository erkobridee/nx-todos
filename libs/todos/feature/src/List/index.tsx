import * as React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { Selectors, Operations } from '@nx-todos/todos/redux';

import Button from '@nx-todos/todos/ui-components/Button';
import ButtonsGroup from '@nx-todos/todos/ui-components/ButtonsGroup';

import TodosListItem from './Item';

import './_styles.scss';

enum ListTypes {
  ALL = 'all',
  INCOMPLETED = 'incompleted',
  COMPLETED = 'completed'
}

export interface ITodosListProps {
  className?: string;
}

export const TodosList: React.FunctionComponent<ITodosListProps> = ({
  className
}) => {
  const dispatch = useDispatch();
  const list = useSelector(Selectors.todos.selectTodos);

  const [listType, setListType] = React.useState<ListTypes>(ListTypes.ALL);

  const changeListType = (type: ListTypes) => () => setListType(type);

  const getFilteredList = () => {
    switch (listType) {
      case ListTypes.INCOMPLETED:
        return list.filter(item => !item.isCompleted);
      case ListTypes.COMPLETED:
        return list.filter(item => item.isCompleted);
      case ListTypes.ALL:
      default:
        return list;
    }
  };

  React.useEffect(() => {
    dispatch(Operations.todos.list());
  }, []);

  return (
    <div className={cn('todos-list', className)}>
      <ButtonsGroup className="todos-list__header">
        <Button
          className="todos-list__header-btn"
          active={listType === ListTypes.ALL}
          onClick={changeListType(ListTypes.ALL)}
        >
          All
        </Button>
        <Button
          className="todos-list__header-btn"
          active={listType === ListTypes.INCOMPLETED}
          onClick={changeListType(ListTypes.INCOMPLETED)}
        >
          Incompleted
        </Button>
        <Button
          className="todos-list__header-btn"
          active={listType === ListTypes.COMPLETED}
          onClick={changeListType(ListTypes.COMPLETED)}
        >
          Completed
        </Button>
      </ButtonsGroup>

      <div className="todos-list__items">
        {getFilteredList().map(item => (
          <TodosListItem
            className="todos-list__item"
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </div>
  );
};

export default TodosList;
