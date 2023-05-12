import { Router } from 'express';

/**
 * External routes
 */
import { contactsRoutes } from './contacts.routes';

const routes = Router();

routes.use('/contacts', contactsRoutes);

export { routes };
