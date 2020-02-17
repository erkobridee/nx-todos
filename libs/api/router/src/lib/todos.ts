import express, { Router, Request, Response } from 'express';

export const config = (parentRouter: Router) => {
  const router = express.Router();

  router.get('/', (_: Request, response: Response) => {
    response.send('return the todos list');
  });

  router.get('/:id', (request: Request, response: Response) => {
    response.send(`return the todo id ${request.params.id}`);
  });

  router.patch('/:id', (request: Request, response: Response) => {
    response.send(`return the updated todo id ${request.params.id}`);
  });

  router.delete('/:id', (request: Request, response: Response) => {
    response.send(`deleted todo id ${request.params.id}`);
  });

  parentRouter.use('/todos', router);
};

export default config;
