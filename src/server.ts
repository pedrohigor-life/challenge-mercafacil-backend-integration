import 'reflect-metadata';
import * as dotenv from 'dotenv';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { routes } from './modules/routes/index.routes';

import swaggerFile from './swagger.json';

/**
 * Dotenv
 */
dotenv.config();

/**
 * Database
 */
import './database';

/**
 * Express
 */
const server = express();

server.use(express.json());
server.use(routes);

/**
 * Sawagger
 */
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

/**
 * Container tSyringe
 */
import './shared/container';

/**
 * Server instance
 */
server.listen(process.env.SERVER_PORT, () => {
  console.log(
    `[${process.env.APP_NAME}] Server is running: http://localhost:${process.env.SERVER_PORT}`
  );
  console.log(
    `[${process.env.APP_NAME}] API Docs: http://localhost:${process.env.SERVER_PORT}/api-docs`
  );
});
