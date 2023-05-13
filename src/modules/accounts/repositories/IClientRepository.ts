import { ICreateClientDTO } from '../dtos/ICreateClientDTO';
import { Client } from '../entities/Cliente';

interface IClientRepository {
  findByUser(email: string): Promise<Client>;
  findById(id: string): Promise<Client>;
  create(user: ICreateClientDTO): Promise<void>;
}
export { IClientRepository };
