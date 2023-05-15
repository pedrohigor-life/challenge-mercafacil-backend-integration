import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

export type NameClient = 'macapa' | 'varejao';

@Entity({ name: 'clients', database: 'mercafacil-varejao' })
class Client {
  @PrimaryColumn()
  id?: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ['macapa', 'varejao'],
  })
  client: NameClient;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidv4();
  }
}

export { Client };
