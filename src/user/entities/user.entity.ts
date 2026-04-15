import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'created_at', type: 'timestamp' })
  created_at!: Date;

  @Column({ name: 'phone_number', type: 'varchar' })
  phone_number!: string;
}
