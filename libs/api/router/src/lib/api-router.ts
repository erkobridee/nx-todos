import { Router, Request, Response } from 'express';

import Todos from './Todos';

export const config = (router: Router) => {
  router.get('/', (_: Request, response: Response) => {
    response.send('Hello world from the ToDos API');
  });

  Todos(router);
};

export default config;
