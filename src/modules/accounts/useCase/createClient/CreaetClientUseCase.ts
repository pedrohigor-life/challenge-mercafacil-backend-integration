import { inject, injectable } from 'tsyringe';
import { IClientRepository } from '../../repositories/IClientRepository';
import { ICreateClientDTO } from '../../dtos/ICreateClientDTO';
import { hash } from 'bcrypt';

@injectable()
class CreaetClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute({ email, client, password }: ICreateClientDTO): Promise<void> {
    const clientAlreadyExists = await this.clientRepository.findByClient(email);

    if (clientAlreadyExists) throw new Error('Client already exists');

    const passwordHash = await hash(password, 8);

    await this.clientRepository.create({
      email,
      client,
      password: passwordHash,
    });
  }
}

export { CreaetClientUseCase };
