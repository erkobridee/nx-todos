/*
  defines the operations (async or not) performed by the state and those
  should trigger one or more actions to update the state
*/
import { Dispatch } from 'redux';

import { TFunction } from '@nx-todos/shared/helpers';
import { ITodo } from '@nx-todos/shared/data-model';

import * as TodosAPI from '@nx-todos/todos/api-calls';

import * as Actions from './actions';
import { ITodosAction } from './definitions';

export const list = () => async (dispatch: Dispatch<ITodosAction>) => {
  try {
    dispatch(Actions.todosFetchRequest());
    const data = await TodosAPI.list();
    dispatch(Actions.todosFetchSuccess(data));
  } catch (error) {
    dispatch(
      Actions.todosFetchFailure(TodosAPI.handleApiError('load todos', error))
    );
  }
};

const singleTodoCall = (
  methodName: string,
  apiCallFn: TFunction<any[], Promise<ITodo>>,
  ...args: string[]
) => async (dispatch: Dispatch<ITodosAction>) => {
  try {
    dispatch(Actions.todoFetchRequest());
    const data = await apiCallFn(...args);
    dispatch(Actions.todoFetchSuccess(data));

    list()(dispatch);
  } catch (error) {
    dispatch(
      Actions.todoFetchFailure(TodosAPI.handleApiError(methodName, error))
    );
  }
};

export const get = (id: string) => singleTodoCall('get todo', TodosAPI.get, id);

export const add = (label: string) =>
  singleTodoCall('add todo', TodosAPI.add, label);

export const toggleCompleted = (id: string) =>
  singleTodoCall('toggle todo completed', TodosAPI.toggleCompleted, id);

export const updateLabel = (id: string, label: string) =>
  singleTodoCall('toggle todo completed', TodosAPI.updateLabel, id, label);

export const remove = (id: string) =>
  singleTodoCall('remove todo', TodosAPI.remove, id);
