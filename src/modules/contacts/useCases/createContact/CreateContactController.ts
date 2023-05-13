import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateContactUseCase } from './CreateContactUseCase';

class CreateContactController {
  async handle(request: Request, response: Response) {
    try {
      const { contacts } = request.body;

      const createContactUseCase = container.resolve(CreateContactUseCase);

      createContactUseCase.execute(null, contacts);

      if (!contacts) {
        const contact = request.body;

        await createContactUseCase.execute(contact, null);
      }

      return response.status(201).send();
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }
}

export { CreateContactController };
