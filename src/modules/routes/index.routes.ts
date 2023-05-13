import { Router } from 'express';

/**
 * External routes
 */
import { contactsRoutes } from './contacts.routes';
import { clientsRoutes } from './clients.routes';
import { authenticateRoutes } from './authenticate.routes';

const routes = Router();

routes.use('/contacts', contactsRoutes);
routes.use('/clients', clientsRoutes);
routes.use('/session', authenticateRoutes);

export { routes };
