import { Router } from 'express';

const contactsRoutes = Router();

contactsRoutes.get('/', (request, response) => {
  return response.status(200).json({ msg: 'ok' });
});

export { contactsRoutes };
