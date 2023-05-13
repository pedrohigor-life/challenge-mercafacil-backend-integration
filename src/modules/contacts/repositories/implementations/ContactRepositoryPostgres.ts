import { Repository, getRepository } from 'typeorm';
import { ICreateContactDTO } from '../../dtos/ICreateContactDTO';
import { Contact } from '../../entities/Contact';
import { IContactRepositories } from '../IContactRepositories';
import { IContactDTO } from '../../dtos/IContactDTO';

class ContactRepositoryPostgres implements IContactRepositories {
  private repository: Repository<Contact>;

  constructor() {
    this.repository = getRepository(Contact);
  }

  findByCellphone(cellphone: string): Promise<Contact> {
    console.log(cellphone);
    return this.repository.findOne({
      where: {
        celular: cellphone,
      },
    });
  }

  async create(
    onlyContact?: ICreateContactDTO,
    contacts?: IContactDTO[]
  ): Promise<void> {
    if (onlyContact) {
      const contact = this.repository.create({
        nome: onlyContact.name,
        celular: onlyContact.cellphone,
      });

      this.repository.save(contact);
    }
  }
}

export { ContactRepositoryPostgres };
