import { inject, injectable } from 'tsyringe';
import { IContactRepositories } from '../../repositories/IContactRepositories';
import { IContactDTO } from '../../dtos/IContactDTO';

@injectable()
class CreateContactUseCase {
  constructor(
    @inject('ContactRepositoryPostgres')
    private contactRepository: IContactRepositories
  ) {}

  async execute(
    onlyContact: IContactDTO | null,
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
          cellphone: contact.cellphone,
        });
      });
    }
  }
}

export { CreateContactUseCase };
