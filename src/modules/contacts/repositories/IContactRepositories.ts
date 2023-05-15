import { IContactDTO } from '../dtos/IContactDTO';
import { ICreateContactDTO } from '../dtos/ICreateContactDTO';
import { Contact } from '../entities/postgres/Contact';

interface IContactRepositories {
  create({ name, cellphone }: IContactDTO): Promise<void>;
  findByCellphone(cellphone: string): Promise<Contact>;
}

export { IContactRepositories };
