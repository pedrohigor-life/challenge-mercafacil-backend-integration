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
    if (!contacts) {
      const contactAlreadyExists = await this.contactRepository.findByCellphone(
        onlyContact.cellphone
      );
      if (!contactAlreadyExists) {
        await this.contactRepository.create({
          name: onlyContact.name,
          cellphone: onlyContact.cellphone,
        });
      }
    } else {
      contacts.map(async (contact) => {
        const contacts: IContactDTO[] = [];
        const contactAlreadyExists =
          await this.contactRepository.findByCellphone(contact.cellphone);

        if (!contactAlreadyExists) contacts.push(contact);

        await this.contactRepository.create({
          name: contact.name,
          cellphone: contact.cellphone.replace(/[^0-9]/g, ''),
        });
      });
    }
  }
}

export { CreateContactUseCase };
