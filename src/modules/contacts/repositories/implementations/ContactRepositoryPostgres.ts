import { Repository, getRepository } from 'typeorm';
import { ICreateContactDTO } from '../../dtos/ICreateContactDTO';
import { Contact } from '../../entities/Contact';
import { IContactRepositories } from '../IContactRepositories';

class ContactRepositoryPostgres implements IContactRepositories {
  private repository: Repository<Contact>;

  constructor() {
    this.repository = getRepository(Contact);
  }

  findByCellphone(cellphone: string): Promise<Contact> {
    return this.repository.findOne({
      where: {
        celular: cellphone,
      },
    });
  }

  async create({ name, cellphone }: ICreateContactDTO): Promise<void> {
    const contact = new Contact();

    Object.assign(contact, {
      nome: name,
      celular: cellphone,
    });

    const contactObject = this.repository.create(contact);

    await this.repository.save(contactObject);
  }
}

export { ContactRepositoryPostgres };
