import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateClientUseCase } from './AuthenticateClientUseCase';

class AuthenticateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const authenticateClientUsecase = container.resolve(
        AuthenticateClientUseCase
      );

      const token = await authenticateClientUsecase.execute({
        email,
        password,
      });

      return response.json(token);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}
export { AuthenticateClientController };
