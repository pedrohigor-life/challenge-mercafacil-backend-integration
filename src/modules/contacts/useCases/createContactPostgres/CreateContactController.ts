import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateContactUseCase } from './CreateContactUseCase';

class CreateContactController {
  async handle(request: Request, response: Response) {
    try {
      const { client } = request;
      const { contacts } = request.body;

      if (client.client === 'varejao') {
        const createContactUseCase = container.resolve(CreateContactUseCase);

        if (contacts) {
          createContactUseCase.execute(null, contacts);
        } else {
          const contact = request.body;

          await createContactUseCase.execute(contact, null);
        }

        return response.status(201).send();
      }

      return response.status(401).json({
        message: 'Ainda não é possível importar contatos para este cliente',
      });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }
}

export { CreateContactController };
