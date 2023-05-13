interface ICreateClientDTO {
  email: string;
  password: string;
  client: 'macapa' | 'varejao';
}

export { ICreateClientDTO };
