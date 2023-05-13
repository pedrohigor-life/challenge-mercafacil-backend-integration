import { inject, injectable } from 'tsyringe';
import { IContactRepositories } from '../../repositories/IContactRepositories';
import { ICreateContactDTO } from '../../dtos/ICreateContactDTO';

@injectable()
class CreateContactUseCase {
  constructor(
    @inject('ContactRepositoryPostgres')
    private contactRepositories: IContactRepositories
  ) {}

  async execute({ name, cellphone }: ICreateContactDTO): Promise<void> {}
}

export { CreateContactUseCase };
