import { container } from 'tsyringe';
import { IContactRepositories } from '../../modules/contacts/repositories/IContactRepositories';
import { ContactRepositoryPostgres } from '../../modules/contacts/repositories/implementations/ContactRepositoryPostgres';
import { IClientRepository } from '../../modules/accounts/repositories/IClientRepository';
import { ClientRepository } from '../../modules/accounts/repositories/implements/ClientRepository';

container.registerSingleton<IContactRepositories>(
  'ContactRepositoryPostgres',
  ContactRepositoryPostgres
);

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository
);
