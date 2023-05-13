import { Router } from 'express';
import { CreateContactController } from '../contacts/useCases/createContact/CreateContactController';

const contactsRoutes = Router();

const createContactController = new CreateContactController();

contactsRoutes.post('/', createContactController.handle);

export { contactsRoutes };
