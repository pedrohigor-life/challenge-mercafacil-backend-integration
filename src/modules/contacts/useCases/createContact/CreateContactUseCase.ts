import { inject, injectable } from 'tsyringe';
import { IContactRepositories } from '../../repositories/IContactRepositories';
import { ICreateContactDTO } from '../../dtos/ICreateContactDTO';
import { Contact } from '../../entities/Contact';

@injectable()
class CreateContactUseCase {
  constructor(
    @inject('ContactRepositoryPostgres')
    private contactRepository: IContactRepositories
  ) {}

  async execute(
    onlyContact?: ICreateContactDTO,
    contacts?: Contact[]
  ): Promise<void> {
    if (onlyContact) {
      const contactAlreadyExists = await this.contactRepository.findByCellphone(
        onlyContact.cellphone
      );

      if (!contactAlreadyExists) {
        await this.contactRepository.create({
          name: onlyContact.name,
          cellphone: onlyContact.cellphone,
        });
      }
    }
  }
}

export { CreateContactUseCase };
