import * as React from 'react';

// -------------------------------------------------------------------------- //
// @begin: constants block

export const TO_STRING = {}.toString;

export const TRUTHY = /^(?:t(?:rue)?|y(?:es)?|on|1)$/i;

export const FALSY = /^(?:f(?:alse)?|no?|off|0)$/i;

// @end: constants block
// -------------------------------------------------------------------------- //
// @begin: enums block

export enum JSTypeof {
  UNDEFINED = 'undefined',
  FUNCTION = 'function',
  OBJECT = 'object',
  STRING = 'string',
  NUMBER = 'number'
}

// @end: enums block
// -------------------------------------------------------------------------- //
// @begin: types block

export type TJSObject = Record<string, any>;

export type TJSValue = TJSObject | any;

export type TArrayFilter<Item> = (item: Item) => boolean;

export type TFunction<Tuple extends any[] = any[], Return = any> = (
  ...args: Tuple
) => Return;

export type TEmptyCallback = () => void;

export type TCallback<Tuple extends any[] = any[], Return = any> =
  | TFunction<Tuple, Return>
  | TEmptyCallback;

export type TTypeCallback<Return, Options = any> = (
  options?: Options
) => Return;

export type TRender<RenderOptions = any> =
  | TFunction<[RenderOptions], JSX.Element>
  | React.ReactNode;

// @end: types block
// -------------------------------------------------------------------------- //
// @begin: interfaces block

export interface IDictionary<T = any> {
  [key: string]: T;
}

export interface IBaseWindow extends Window {
  CSS?: any;
}

// @end: interfaces block
// -------------------------------------------------------------------------- //
