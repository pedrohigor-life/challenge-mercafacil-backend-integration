import { ICreateContactDTO } from '../dtos/ICreateContactDTO';
import { Contact } from '../entities/Contact';

interface IContactRepositories {
  create({ name, cellphone }: ICreateContactDTO): Promise<void>;
  findByCellphone(cellphone: string): Promise<Contact>;
}

export { IContactRepositories };
