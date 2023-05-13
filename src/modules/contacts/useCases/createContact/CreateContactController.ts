import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateContactUseCase } from './CreateContactUseCase';

class CreateContactController {
  async handle(request: Request, response: Response) {
    try {
      const { name, cellphone } = request.body;

      const createContactUseCase = container.resolve(CreateContactUseCase);

      await createContactUseCase.execute({ name, cellphone });

      return response.status(201).send();
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }
}

export { CreateContactController };
