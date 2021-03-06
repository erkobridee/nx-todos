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

enum EndpointPaths {
  ROOT = '/',
  ID = '/:id',
  TOOGLE_COMPLETED = '/:id/completed',
  UPDATE_LABEL = '/:id/label'
}

export const config = (parentRouter: Router) => {
  const router = express.Router();

  router.get(EndpointPaths.ROOT, (_: Request, response: Response) => {
    response.send(Todo.list());
  });

  router.get(EndpointPaths.ID, (request: Request, response: Response) => {
    const todo = Todo.get(request.params.id);
    buildResponse(response, todo);
  });

  router.post(EndpointPaths.ROOT, (request: Request, response: Response) => {
    const { label }: Partial<ITodo> = request.body;
    const todo = Todo.add(label);
    buildResponse(response, todo);
  });

  router.patch(
    EndpointPaths.TOOGLE_COMPLETED,
    (request: Request, response: Response) => {
      const todo = Todo.toggleCompleted(request.params.id);
      buildResponse(response, todo);
    }
  );

  router.patch(
    EndpointPaths.UPDATE_LABEL,
    (request: Request, response: Response) => {
      const { label }: Partial<ITodo> = request.body;
      const todo = Todo.updateLabel(request.params.id, label);
      buildResponse(response, todo);
    }
  );

  router.delete(EndpointPaths.ID, (request: Request, response: Response) => {
    const todo = Todo.remove(request.params.id);
    buildResponse(response, todo);
  });

  parentRouter.use(`/${TODO_TYPE}`, router);
};

export default config;
