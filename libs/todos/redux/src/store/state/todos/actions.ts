import { IError, ITodo } from '@nx-todos/shared/data-model';
import { TActionFunction } from '@nx-todos/shared/redux-helpers';

import { TodosActionTypes as Types, ITodosAction } from './definitions';

//----------------------------------------------------------------------------//
// @begin: todos

/**
 * builds the todos fetch request action object
 *
 * @returns {ITodosAction} object
 */
export const todosFetchRequest: TActionFunction<
  void,
  ITodosAction<undefined>
> = () => ({
  type: Types.TODOS_FETCH_REQUEST
});

/**
 * builds the todos fetch success action object
 *
 * @param {ITodo[]} payload
 *
 * @returns {ITodosAction<ITodo[]>} object
 */
export const todosFetchSuccess: TActionFunction<
  ITodo[],
  ITodosAction<ITodo[]>
> = payload => ({
  type: Types.TODOS_FETCH_SUCCESS,
  payload
});

/**
 * builds the todos fetch failure action object
 *
 * @param {IError} payload
 *
 * @returns {ITodosAction<IError>} object
 */
export const todosFetchFailure: TActionFunction<
  IError,
  ITodosAction<IError>
> = payload => ({
  type: Types.TODOS_FETCH_FAILURE,
  payload
});

// @end: todos
//----------------------------------------------------------------------------//
// @begin: todo

/**
 * builds the todo fetch request action object
 *
 * @returns {ITodoAction} object
 */
export const todoFetchRequest: TActionFunction<
  void,
  ITodosAction<undefined>
> = () => ({
  type: Types.TODO_FETCH_REQUEST
});

/**
 * builds the todo fetch success action object
 *
 * @param {ITodo} payload
 *
 * @returns {ITodosAction<ITodo>} object
 */
export const todoFetchSuccess: TActionFunction<
  ITodo,
  ITodosAction<ITodo>
> = payload => ({
  type: Types.TODO_FETCH_SUCCESS,
  payload
});

/**
 * builds the todo fetch failure action object
 *
 * @param {IError} payload
 *
 * @returns {ITodosAction<IError>} object
 */
export const todoFetchFailure: TActionFunction<
  IError,
  ITodosAction<IError>
> = payload => ({
  type: Types.TODO_FETCH_FAILURE,
  payload
});

// @end: todo
//----------------------------------------------------------------------------//
