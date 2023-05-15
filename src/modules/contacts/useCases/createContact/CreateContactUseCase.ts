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
            cellphone: contact.cellphone.replace(/[^0-9]/g, ''),
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
            cellphone: contact.cellphone.replace(
              /(\d{2})?(\d{2})?(\d{5})?(\d{2})/,
              '+$1 ($2) $3-$4'
            ),
          });
        }
      });
    }
  }
}

// +55 (41) 93030-6905

export { CreateContactUseCase };
