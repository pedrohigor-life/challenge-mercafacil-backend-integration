import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreaetClientUseCase } from './CreaetClientUseCase';

class CreateClientController {
  async handle(request: Request, response: Response) {
    try {
      const { email, password, client } = request.body;

      const createClientUseCase = container.resolve(CreaetClientUseCase);

      createClientUseCase.execute({ email, password, client });

      return response.status(201).send();
    } catch (err) {
      return response.status(401).json({ error: err.message });
    }
  }
}

export { CreateClientController };
