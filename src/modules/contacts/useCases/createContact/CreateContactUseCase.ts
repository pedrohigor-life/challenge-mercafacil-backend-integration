import { inject, injectable } from 'tsyringe';
import { IContactRepositories } from '../../repositories/IContactRepositories';
import { IContactDTO } from '../../dtos/IContactDTO';
import { IClientDTO } from '../../dtos/IClientDTO';

@injectable()
class CreateContactUseCase {
  constructor(
    @inject('ContactRepositoryPostgres')
    private contactRepositoryPostgres: IContactRepositories,
    @inject('ContactRepositoryMySQL')
    private contactRepositoryMySQL: IContactRepositories
  ) {}

  async execute(client: IClientDTO, contacts: IContactDTO[]): Promise<void> {
    const { id, client: clientName } = client;

    if (clientName === 'varejao') {
      contacts.map(async (contact) => {
        const contactAlreadyExists =
          await this.contactRepositoryPostgres.findByCellphone(
            contact.cellphone
          );

        if (!contactAlreadyExists) {
          await this.contactRepositoryPostgres.create({
            name: contact.name,
            cellphone: contact.cellphone,
          });
        }
      });
    } else {
      contacts.map(async (contact) => {
        const contactAlreadyExists =
          await this.contactRepositoryMySQL.findByCellphone(contact.cellphone);

        if (!contactAlreadyExists) {
          await this.contactRepositoryMySQL.create({
            name: contact.name,
            cellphone: contact.cellphone,
          });
        }
      });
    }
  }
}

export { CreateContactUseCase };
