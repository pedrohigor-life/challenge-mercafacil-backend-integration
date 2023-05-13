import { inject, injectable } from 'tsyringe';
import { IContactRepositories } from '../../repositories/IContactRepositories';
import { ICreateContactDTO } from '../../dtos/ICreateContactDTO';
import { IContactDTO } from '../../dtos/IContactDTO';

@injectable()
class CreateContactUseCase {
  constructor(
    @inject('ContactRepositoryPostgres')
    private contactRepository: IContactRepositories
  ) {}

  async execute(
    onlyContact: ICreateContactDTO | null,
    contacts: IContactDTO[]
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

    contacts.map(async (contact) => {
      const contactAlreadyExists = await this.contactRepository.findByCellphone(
        contact.cellphone
      );

      console.log(contactAlreadyExists);
    });
  }
}

export { CreateContactUseCase };
