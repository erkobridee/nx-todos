/*
  manages all the application states through the react-redux
*/
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { isBrowser } from '@nx-todos/shared/helpers';

import * as reducers from './state';
import { IRootState } from './definitions';

const rootReducer = combineReducers(reducers);

const composeEnhancers =
  (isBrowser ? (window as any) : {}).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

const middlewares = [thunkMiddleware];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export const dispatch = store.dispatch;

export const getState = (): IRootState => store.getState() as any;
