import { IAction } from '@nx-todos/shared/redux-helpers';
import { ITodo, IError } from '@nx-todos/shared/data-model';

export enum TodosActionTypes {
  TODOS_FETCH_REQUEST = 'todos/FETCH_REQUEST',
  TODOS_FETCH_SUCCESS = 'todos/FETCH_SUCCESS',
  TODOS_FETCH_FAILURE = 'todos/FETCH_FAILURE',

  TODO_FETCH_REQUEST = 'todo/FETCH_REQUEST',
  TODO_FETCH_SUCCESS = 'todo/FETCH_SUCCESS',
  TODO_FETCH_FAILURE = 'todo/FETCH_FAILURE'
}

export interface ITodosState {
  todos: ITodo[];
  isTodosFetching: boolean;
  isTodosFetched: boolean;
  isTodosFetchFailed: boolean;

  todo?: ITodo;
  isTodoFetching: boolean;
  isTodoFetched: boolean;
  isTodoFetchFailed: boolean;

  fetchFailedError?: IError;
}

/**
 * @template P - payload
 */
export interface ITodosAction<P = any> extends IAction<P> {}
