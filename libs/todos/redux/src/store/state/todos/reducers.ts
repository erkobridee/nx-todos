import { IReducerMap, createReducer } from '@nx-todos/shared/redux-helpers';
import { ITodo, IError } from '@nx-todos/shared/data-model';

import {
  TodosActionTypes as Types,
  ITodosState,
  ITodosAction
} from './definitions';

const initialState: ITodosState = {
  todos: [] as ITodo[],
  isTodosFetching: false,
  isTodosFetched: false,
  isTodosFetchFailed: false,

  todo: undefined,
  isTodoFetching: false,
  isTodoFetched: false,
  isTodoFetchFailed: false,

  fetchFailedError: undefined
};

type TPayload = ITodo[] | ITodo | IError;

const reducerMap: IReducerMap<ITodosState, ITodosAction<TPayload>> = {
  [Types.TODOS_FETCH_REQUEST]: state => ({
    ...state,
    isTodosFetching: true,
    isTodosFetched: false,
    isTodosFetchFailed: false,
    fetchFailedError: undefined
  }),
  [Types.TODOS_FETCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    isTodosFetching: true,
    isTodosFetched: true,
    todos: payload as ITodo[]
  }),
  [Types.TODOS_FETCH_FAILURE]: (state, { payload }) => ({
    ...state,
    isTodosFetching: false,
    isTodosFetchFailed: true,
    fetchFailedError: payload as IError
  }),

  //---//

  [Types.TODO_FETCH_REQUEST]: state => ({
    ...state,
    isTodoFetching: true,
    isTodoFetched: false,
    isTodoFetchFailed: false
  }),
  [Types.TODO_FETCH_SUCCESS]: (state, { payload }) => ({
    ...state,
    isTodoFetching: false,
    isTodoFetched: true,
    todo: payload as ITodo
  }),
  [Types.TODO_FETCH_FAILURE]: (state, { payload }) => ({
    ...state,
    isTodoFetching: false,
    isTodoFetchFailed: true,
    fetchFailedError: payload as IError
  })
};

export default createReducer(initialState)(reducerMap);
