import * as express from 'express';
import ApiCommon from './api-common-route';

export default function createServer() {
  const app = express();
  app.use(express.json());
  app.use('/bmi-api', ApiCommon);
  return app;
}

