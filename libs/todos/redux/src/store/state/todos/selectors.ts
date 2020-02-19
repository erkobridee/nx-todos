/*
  Defines the access to the data from the state
*/
import { IRootState } from '@nx-todos/todos/redux';

export const selectTodosState = (state: IRootState) => state.todos;

//----------------------------------------------------------------------------//

export const selectTodos = (state: IRootState) => selectTodosState(state).todos;

export const selectIsTodosFetching = (state: IRootState) =>
  selectTodosState(state).isTodosFetching;

export const selectIsTodosFetched = (state: IRootState) =>
  selectTodosState(state).isTodosFetched;

export const selectIsTodosFetchFailed = (state: IRootState) =>
  selectTodosState(state).isTodosFetchFailed;

//----------------------------------------------------------------------------//

export const selectTodo = (state: IRootState) => selectTodosState(state).todo;

export const selectIsTodoFetching = (state: IRootState) =>
  selectTodosState(state).isTodoFetching;

export const selectIsTodoFetched = (state: IRootState) =>
  selectTodosState(state).isTodoFetched;

export const selectIsTodoFetchFailed = (state: IRootState) =>
  selectTodosState(state).isTodoFetchFailed;

//----------------------------------------------------------------------------//

export const selectFetchFailedError = (state: IRootState) =>
  selectTodosState(state).fetchFailedError;

//----------------------------------------------------------------------------//
