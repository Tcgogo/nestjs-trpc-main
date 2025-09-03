import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('pdd_shop')
export class Shop {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string
}
