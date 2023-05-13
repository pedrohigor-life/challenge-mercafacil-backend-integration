import 'reflect-metadata';
import * as dotenv from 'dotenv';
import express from 'express';
import { routes } from './modules/routes/index.routes';
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
});
