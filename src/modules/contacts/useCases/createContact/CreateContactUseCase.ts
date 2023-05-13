import { inject, injectable } from 'tsyringe';
import { IContactRepositories } from '../../repositories/IContactRepositories';
import { ICreateContactDTO } from '../../dtos/ICreateContactDTO';

@injectable()
class CreateContactUseCase {
  constructor(
    @inject('ContactRepositoryPostgres')
    private contactRepository: IContactRepositories
  ) {}

  async execute({ name, cellphone }: ICreateContactDTO): Promise<void> {
    const contactAlreadyExists = await this.contactRepository.findByCellphone(
      cellphone
    );

    if (!contactAlreadyExists) {
      await this.contactRepository.create({ name, cellphone });
    }
  }
}

export { CreateContactUseCase };
