import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { ClientRepository } from '../modules/accounts/repositories/implements/ClientRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new Error('Token missing');

    const [, token] = authHeader.split(' ');

    try {
      const { sub: client_id } = verify(
        token,
        process.env.SECRET_KEY_JWT
      ) as IPayload;

      const clientRepository = new ClientRepository();

      const clientExists = await clientRepository.findById(client_id);

      if (!clientExists) throw new Error('User does not exists');

      request.client = {
        id: client_id,
        client: clientExists.client,
      };

      next();
    } catch (error) {
      throw new Error('Invalid token');
    }
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
