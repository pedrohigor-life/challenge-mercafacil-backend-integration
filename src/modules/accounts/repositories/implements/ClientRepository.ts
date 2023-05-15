import { Client } from '../../entities/postgres/Cliente';
import { IClientRepository } from '../IClientRepository';
import { ICreateClientDTO } from '../../dtos/ICreateClientDTO';
import { Repository } from 'typeorm';
import { PostgresDataSource } from '../../../../database/datasources/PostgresDataSource';

class ClientRepository implements IClientRepository {
  private repository: Repository<Client>;

  constructor() {
    this.repository = PostgresDataSource.getRepository(Client);
  }

  async findById(id: string): Promise<Client> {
    return await this.repository.findOneBy({
      id,
    });
  }

  async findByClient(email: string): Promise<Client> {
    return await this.repository.findOneBy({ email });
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
