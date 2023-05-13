import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateContactUseCase } from './CreateContactUseCase';

class CreateContactController {
  async handle(request: Request, response: Response) {
    try {
      const { name, cellphone } = request.body;

      const createContact = container.resolve(CreateContactUseCase);

      await createContact.execute({ name, cellphone });

      return response.status(201).send();
    } catch (err) {
      return response.status(err.statusCode).json({ error: err.message });
    }
  }
}

export { CreateContactController };
