import { ICreateClientDTO } from '../dtos/ICreateClientDTO';
import { Client } from '../entities/postgres/Cliente';

interface IClientRepository {
  findByClient(email: string): Promise<Client>;
  findById(id: string): Promise<Client>;
  create(user: ICreateClientDTO): Promise<void>;
}
export { IClientRepository };
