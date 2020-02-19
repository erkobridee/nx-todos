import axios, { AxiosError } from 'axios';
import { IError, ITodo, TODO_TYPE } from '@nx-todos/shared/data-model';

type TUrlPart = string | number;

export const buildApiUrl = (...urlParts: TUrlPart[]) =>
  [`/api/${TODO_TYPE}`, ...urlParts].join('/');

export const handleApiError = (
  methodName: string,
  error: AxiosError<IError>
): IError => {
  const errorData = error.response.data;
  console.error(methodName, errorData.message);
  return errorData;
};

export const list = async () => {
  const response = await axios.get<ITodo[]>(buildApiUrl());
  return response.data;
};

export const get = async (id: string) => {
  const response = await axios.get<ITodo>(buildApiUrl(id));
  return response.data;
};

export const add = async (label: string) => {
  const body: Partial<ITodo> = { label };
  const response = await axios.post<ITodo>(buildApiUrl(), body);
  return response.data;
};

export const toggleCompleted = async (id: string) => {
  const response = await axios.patch<ITodo>(buildApiUrl(id));
  return response.data;
};

export const remove = async (id: string) => {
  const response = await axios.delete<ITodo>(buildApiUrl(id));
  return response.data;
};
