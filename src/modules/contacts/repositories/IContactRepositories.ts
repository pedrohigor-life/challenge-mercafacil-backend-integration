import { ICreateContactDTO } from '../dtos/ICreateContactDTO';

interface IContactRepositories {
  create({ name, cellphone }: ICreateContactDTO): Promise<void>;
}

export { IContactRepositories };
