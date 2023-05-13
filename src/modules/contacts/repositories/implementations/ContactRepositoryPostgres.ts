import { Repository, getRepository } from 'typeorm';
import { ICreateContactDTO } from '../../dtos/ICreateContactDTO';
import { Contact } from '../../entities/Contact';
import { IContactRepositories } from '../IContactRepositories';

class ContactRepositoryPostgres implements IContactRepositories {
  private repository: Repository<Contact>;

  constructor() {
    this.repository = getRepository(Contact);
  }

  async create({ name, cellphone }: ICreateContactDTO): Promise<void> {
    const contact = this.repository.create({ name, cellphone });

    await this.repository.save(contact);
  }
}

export { ContactRepositoryPostgres };
