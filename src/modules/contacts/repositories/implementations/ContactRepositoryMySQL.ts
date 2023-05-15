import { Repository } from 'typeorm';
import { Contact } from '../../entities/mysql/Contact';
import { IContactRepositories } from '../IContactRepositories';
import { IContactDTO } from '../../dtos/IContactDTO';
import { MySQLDataSource } from '../../../../database/datasources/MySQLDataSource';

class ContactRepositoryMySQL implements IContactRepositories {
  private repository: Repository<Contact>;

  constructor() {
    this.repository = MySQLDataSource.getRepository(Contact);
  }

  async findByCellphone(cellphone: string): Promise<Contact> {
    return await this.repository.findOneBy({ celular: cellphone });
  }

  async create({ name, cellphone }: IContactDTO): Promise<void> {
    const contact = this.repository.create({
      nome: name,
      celular: cellphone,
    });

    this.repository.save(contact);
  }
}

export { ContactRepositoryMySQL };
