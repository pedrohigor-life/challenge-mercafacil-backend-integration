import { Router } from 'express';
import { CreateContactController } from '../contacts/useCases/createContact/CreateContactController';
import { ensureAuthenticated } from '../../middlewares/ensureAuthenticated';

const contactsRoutes = Router();

const createContactController = new CreateContactController();

contactsRoutes.use(ensureAuthenticated);
contactsRoutes.post('/', createContactController.handle);

export { contactsRoutes };
