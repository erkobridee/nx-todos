import * as React from 'react';
import cn from 'classnames';

import { ITodo } from '@nx-todos/shared/data-model';

import Button from '@nx-todos/todos/ui-components/Button';
import ButtonsGroup from '@nx-todos/todos/ui-components/ButtonsGroup';
import InputText from '@nx-todos/todos/ui-components/InputText';
import Checker from '@nx-todos/todos/ui-components/Checker';

import './_styles.scss';

enum UIState {
  EDIT = 'edit',
  VIEW = 'view'
}

export interface ITodosListItemProps {
  className?: string;
  disabled?: boolean;
  data: ITodo;
  onEditing: (todoId: string) => void;
}

export const TodosListItem: React.FunctionComponent<ITodosListItemProps> = ({
  className,
  disabled = false,
  data,
  onEditing
}) => {
  const checkerRef = React.createRef<HTMLInputElement>();
  const inputRef = React.createRef<HTMLInputElement>();

  const [uiState, setUiState] = React.useState<UIState>(UIState.VIEW);

  const onSaveClick = () => {
    const { value } = inputRef.current;

    if (data.label !== value) {
      onEditing('');
      console.log('call the api to save the todo');
      console.log('input value: ', value);
    }
  };

  const onCancelClick = () => {
    onEditing('');
    setUiState(UIState.VIEW);
  };

  const onEditClick = () => {
    onEditing(data.id);
    setUiState(UIState.EDIT);
  };

  const onRemoveClick = () => {
    console.log('call the api to remove the todo');
  };

  const onCompletedCheckerChange = () => {
    console.log('completed: ', checkerRef.current.checked);
  };

  const buildUI = () => {
    switch (uiState) {
      case UIState.EDIT:
        return (
          <>
            <div className="todos-list-item__label">
              <InputText inputRef={inputRef} defaultValue={data.label} />
            </div>
            <div className="todos-list-item__btns">
              <ButtonsGroup>
                <Button className="todos-list-item__btn" onClick={onSaveClick}>
                  Save
                </Button>
                <Button
                  className="todos-list-item__btn"
                  onClick={onCancelClick}
                >
                  Cancel
                </Button>
              </ButtonsGroup>
            </div>
          </>
        );
      case UIState.VIEW:
      default:
        return (
          <>
            <div className="todos-list-item__done">
              <Checker
                inputRef={checkerRef}
                defaultChecked={data.isCompleted}
                onChange={onCompletedCheckerChange}
                disabled={disabled}
              />
            </div>
            <div className="todos-list-item__label">{data.label}</div>
            <div className="todos-list-item__btns">
              <ButtonsGroup>
                <Button
                  className="todos-list-item__btn"
                  onClick={onEditClick}
                  disabled={disabled}
                >
                  Edit
                </Button>
                <Button
                  className="todos-list-item__btn"
                  onClick={onRemoveClick}
                  disabled={disabled}
                >
                  Remove
                </Button>
              </ButtonsGroup>
            </div>
          </>
        );
    }
  };

  return <div className={cn('todos-list-item', className)}>{buildUI()}</div>;
};

export default TodosListItem;
