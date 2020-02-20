import * as React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { Selectors, Operations } from '@nx-todos/todos/redux';
import Button from '@nx-todos/todos/ui-components/Button';
import InputText from '@nx-todos/todos/ui-components/InputText';

import { TFunction } from '@nx-todos/shared/helpers';

import './_styles.scss';

export interface ITodoAddProps {
  className?: string;
  disabled?: boolean;
}

export const TodoAdd: React.FunctionComponent<ITodoAddProps> = ({
  className,
  disabled = false
}) => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');
  const [isAddDisabled, setIsAddDisabled] = React.useState(true);

  const isTodoFetching = useSelector(Selectors.todos.selectIsTodoFetching);
  const isTodoFetched = useSelector(Selectors.todos.selectIsTodoFetched);

  const onAddClickHandler = () => {
    dispatch(Operations.todos.add(value));
  };

  const onTextChangeHandler: TFunction<
    [React.ChangeEvent<HTMLInputElement>],
    void
  > = ({ currentTarget }) => {
    setValue(currentTarget.value);
  };

  React.useEffect(() => {
    setIsAddDisabled(isTodoFetching || value.length === 0);
  }, [value, isTodoFetching]);

  React.useEffect(() => {
    if (isTodoFetched) {
      setValue('');
    }
  }, [isTodoFetched]);

  return (
    <div className={cn('todo-add', className)}>
      <InputText
        className="todo-add__field"
        value={value}
        onChange={onTextChangeHandler}
      />
      <Button
        className="todo-add__btn"
        onClick={onAddClickHandler}
        disabled={disabled || isAddDisabled}
      >
        Add
      </Button>
    </div>
  );
};

export default TodoAdd;
