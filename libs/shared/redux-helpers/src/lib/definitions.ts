import { AnyAction, Action, Reducer } from 'redux';

/**
 * Defines the action object
 *
 * @template P - payload
 * @template T - type
 */
export interface IAction<P = any, T = string> extends Action<T> {
  payload?: P;
}

/**
 * Defines the action object builder function
 *
 * @template P - payload
 * @template A - action interface that extends the IAction interface
 *
 * @param {P} payload
 *
 * @returns {A} action object
 */
export type TActionFunction<P = any, A extends IAction = IAction<P>> = (
  payload: P
) => A;

/**
 * Defines the reducer function
 *
 * @template S - state
 * @template A - action
 *
 * @param {S} state
 * @param {A} action
 *
 * @returns {S} state object
 */
export type TReducerFunction<S = any, A extends Action = AnyAction> = (
  state: S,
  action: A
) => S;

/**
 * Defines the reducers map object
 *
 * @template S - state
 * @template A - action that extends Action interface from redux library
 */
export interface IReducerMap<S, A extends Action = AnyAction> {
  [key: string]: TReducerFunction<S, A>;
}

/**
 * Defines the reducer map function
 *
 * @template S - state
 * @template A - action that extends Action interface from redux library
 *
 * @param {IReducerMap} reducerMap
 *
 * @returns {Reducer<S, A>} function
 */
export type TReducerMapFunction<S, A extends Action = AnyAction> = (
  reducerMap: IReducerMap<S, A>
) => Reducer<S, A>;
