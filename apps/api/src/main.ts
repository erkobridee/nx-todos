import * as express from 'express';

import { config as configRouter } from '@nx-todos/api/router';

const app = express();
const router = express.Router();

configRouter(router);

app.use('/api', router);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
