import express, { Router, Request, Response } from 'express';

import { IError, ITodo, TODO_TYPE } from '@nx-todos/shared/data-model';
import { Todo } from '@nx-todos/api/data';

const buildResponse = (response: Response, todo: ITodo) => {
  if (todo) {
    response.send(todo);
  } else {
    const code = 404;
    const error: IError = {
      code,
      message: 'Not found'
    };
    response.status(code).send(error);
  }
};

export const config = (parentRouter: Router) => {
  const router = express.Router();

  router.get('/', (_: Request, response: Response) => {
    response.send(Todo.list());
  });

  router.get('/:id', (request: Request, response: Response) => {
    const todo = Todo.get(request.params.id);
    buildResponse(response, todo);
  });

  router.patch('/:id', (request: Request, response: Response) => {
    const todo = Todo.toggleCompleted(request.params.id);
    buildResponse(response, todo);
  });

  router.delete('/:id', (request: Request, response: Response) => {
    const todo = Todo.remove(request.params.id);
    buildResponse(response, todo);
  });

  parentRouter.use(`/${TODO_TYPE}`, router);
};

export default config;
