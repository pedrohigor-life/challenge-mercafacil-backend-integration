import { ICreateContactDTO } from '../dtos/ICreateContactDTO';
import { Contact } from '../entities/Contact';

interface IContactRepositories {
  create(contact?: ICreateContactDTO, contacts?: Contact[]): Promise<void>;
  findByCellphone(cellphone: string): Promise<Contact>;
}

export { IContactRepositories };
