import { Repository, getRepository } from 'typeorm';
import { Client } from '../../entities/postgres/Cliente';
import { IClientRepository } from '../IClientRepository';
import { ICreateClientDTO } from '../../dtos/ICreateClientDTO';

class ClientRepository implements IClientRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = getRepository(Client);
  }

  async findById(id: string): Promise<Client> {
    return this.repository.findOne({ id });
  }

  async findByClient(email: string): Promise<Client> {
    return this.repository.findOne({ email });
  }

  async create({ email, password, client }: ICreateClientDTO): Promise<void> {
    const user = this.repository.create({
      email,
      password,
      client,
    });

    await this.repository.save(user);
  }
}

export { ClientRepository };
