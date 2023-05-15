import { container } from 'tsyringe';
import { IContactRepositories } from '../../modules/contacts/repositories/IContactRepositories';
import { ContactRepositoryPostgres } from '../../modules/contacts/repositories/implementations/ContactRepositoryPostgres';
import { IClientRepository } from '../../modules/accounts/repositories/IClientRepository';
import { ClientRepository } from '../../modules/accounts/repositories/implements/ClientRepository';
import { ContactRepositoryMySQL } from '../../modules/contacts/repositories/implementations/ContactRepositoryMySQL';

container.registerSingleton<IContactRepositories>(
  'ContactRepositoryPostgres',
  ContactRepositoryPostgres
);

container.registerSingleton<IContactRepositories>(
  'ContactRepositoryMySQL',
  ContactRepositoryMySQL
);

container.registerSingleton<IClientRepository>(
  'ClientRepository',
  ClientRepository
);
