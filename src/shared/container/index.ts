import { container } from 'tsyringe';
import { IContactRepositories } from '../../modules/contacts/repositories/IContactRepositories';
import { ContactRepositoryPostgres } from '../../modules/contacts/repositories/implementations/ContactRepositoryPostgres';

container.registerSingleton<IContactRepositories>(
  'ContactRepositoryPostgres',
  ContactRepositoryPostgres
);
