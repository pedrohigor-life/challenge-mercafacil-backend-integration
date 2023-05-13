import { inject, injectable } from 'tsyringe';

import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IClientRepository } from '../../repositories/IClientRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  client: {
    client: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const client = await this.clientRepository.findByClient(email);

    if (!client) throw new Error('Email or Password incorrect!');

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) throw new Error('Email or Password incorrect!');

    const token = sign({}, process.env.SECRET_KEY_JWT, {
      subject: client.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      client: {
        email: client.email,
        client: client.client,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthenticateClientUseCase };
