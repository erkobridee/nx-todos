/*
  Defines the access to the data from the state
*/
import { IRootState } from '@nx-todos/todos/redux';

export const selectTodosState = (state: IRootState) => state.todos;

//----------------------------------------------------------------------------//

export const selectTodos = (state: IRootState) => selectTodos(state).todos;

export const selectIsTodosFetching = (state: IRootState) =>
  selectTodos(state).isTodosFetching;

export const selectIsTodosFetched = (state: IRootState) =>
  selectTodos(state).isTodosFetched;

export const selectIsTodosFetchFailed = (state: IRootState) =>
  selectTodos(state).isTodosFetchFailed;

//----------------------------------------------------------------------------//

export const selectTodo = (state: IRootState) => selectTodos(state).todo;

export const selectIsTodoFetching = (state: IRootState) =>
  selectTodos(state).isTodoFetching;

export const selectIsTodoFetched = (state: IRootState) =>
  selectTodos(state).isTodoFetched;

export const selectIsTodoFetchFailed = (state: IRootState) =>
  selectTodos(state).isTodoFetchFailed;

//----------------------------------------------------------------------------//

export const selectFetchFailedError = (state: IRootState) =>
  selectTodos(state).fetchFailedError;

//----------------------------------------------------------------------------//
