import axios, { AxiosError } from 'axios';

// https://github.com/ctimmerm/axios-mock-adapter
import MockAdapter from 'axios-mock-adapter';

import * as API from './api';

import {
  IError,
  ITodo,
  TODO_TYPE,
  buildTodo
} from '@nx-todos/shared/data-model';

const BASE_URL = `/api/${TODO_TYPE}`;

describe('todos / api', () => {
  it('should build the api url', () => {
    expect(API.buildApiUrl()).toEqual(BASE_URL);
    expect(API.buildApiUrl(1)).toEqual(`${BASE_URL}/1`);
  });

  describe('async call', () => {
    const mock = new MockAdapter(axios);

    afterEach(() => {
      // cleaning up the mess left behind the previous test
      mock.reset();
    });

    it('should get a list of todos', async () => {
      const data: ITodo[] = [buildTodo('a'), buildTodo('b')];
      mock.onGet(API.buildApiUrl()).reply(200, data);

      try {
        const responseData = await API.list();
        expect(JSON.stringify(responseData)).toEqual(JSON.stringify(data));
      } catch (e) {}
    });

    it('should add a todo', async () => {
      const label = 'test';
      const data = buildTodo(label);
      mock.onPost(API.buildApiUrl()).reply(200, data);

      try {
        const responseData = await API.add(label);
        expect(JSON.stringify(responseData)).toEqual(JSON.stringify(data));
      } catch (e) {}
    });

    describe('get by id', () => {
      const id = 'test-id';

      it('should not found', async () => {
        const errorId = `${id}-404`;
        const responseErrorData: IError = { code: 404, message: 'not found' };
        mock.onGet(API.buildApiUrl(errorId)).reply(404, responseErrorData);

        try {
          await API.get(errorId);
        } catch (e) {
          const error: AxiosError<IError> = e;
          expect(error).toBeDefined();
          expect(JSON.stringify(error.response.data)).toEqual(
            JSON.stringify(responseErrorData)
          );
        }
      });

      it('should get', async () => {
        const data = buildTodo('single todo', id);
        mock.onGet(API.buildApiUrl(id)).reply(200, data);
        try {
          const responseData = await API.get(id);
          expect(JSON.stringify(responseData)).toEqual(JSON.stringify(data));
        } catch (e) {}
      });
    });

    describe('toggle completed', () => {
      const id = 'test-id';

      it('should not found', async () => {
        const errorId = `${id}-404`;
        const responseErrorData: IError = { code: 404, message: 'not found' };
        mock.onPatch(API.buildApiUrl(errorId)).reply(404, responseErrorData);

        try {
          await API.toggleCompleted(errorId);
        } catch (e) {
          const error: AxiosError<IError> = e;
          expect(error).toBeDefined();
          expect(JSON.stringify(error.response.data)).toEqual(
            JSON.stringify(responseErrorData)
          );
        }
      });

      it('should be completed', async () => {
        const data = buildTodo('test', id);
        data.isCompleted = true;
        mock.onPatch(API.buildApiUrl(id)).reply(200, data);

        try {
          const responseData = await API.toggleCompleted(id);

          expect(data.isCompleted).toBeFalsy();
          expect(responseData.isCompleted).toBeTruthy();
          expect(JSON.stringify(responseData)).not.toEqual(
            JSON.stringify(data)
          );
        } catch (e) {}
      });
    });

    describe('remove by id', () => {
      const id = 'test-id';

      it('should not found', async () => {
        const errorId = `${id}-404`;
        const responseErrorData: IError = { code: 404, message: 'not found' };
        mock.onDelete(API.buildApiUrl(errorId)).reply(404, responseErrorData);

        try {
          await API.remove(errorId);
        } catch (e) {
          const error: AxiosError<IError> = e;
          expect(error).toBeDefined();
          expect(JSON.stringify(error.response.data)).toEqual(
            JSON.stringify(responseErrorData)
          );
        }
      });

      it('should get', async () => {
        const data = buildTodo('single todo', id);
        mock.onDelete(API.buildApiUrl(id)).reply(200, data);
        try {
          const responseData = await API.remove(id);
          expect(JSON.stringify(responseData)).toEqual(JSON.stringify(data));
        } catch (e) {}
      });
    });
  });
});
