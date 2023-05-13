import { Router } from 'express';
import { CreateClientController } from '../accounts/useCase/createClient/CreateClientController';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';

const clientsRoutes = Router();

const createClientController = new CreateClientController();

clientsRoutes.use(ensureAuthenticated);
clientsRoutes.post('/', createClientController.handle);

export { clientsRoutes };
