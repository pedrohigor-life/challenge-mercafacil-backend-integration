import { inject, injectable } from 'tsyringe';
import { IClientRepository } from '../../repositories/IClientRepository';
import { ICreateClientDTO } from '../../dtos/ICreateClientDTO';

@injectable()
class CreaetClientUseCase {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository
  ) {}

  async execute({ email, client, password }: ICreateClientDTO): Promise<void> {
    const clientAlreadyExists = await this.clientRepository.findByClient(
      email,
      client
    );

    if (clientAlreadyExists) throw new Error('Client already exists');

    await this.clientRepository.create({
      email,
      client,
      password,
    });
  }
}

export { CreaetClientUseCase };
