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

  @Column()
  stock!: number

  @Column()
  price!: number

  @Column()
  description!: string

  @Column()
  isActive!: boolean

  @Column('int', { array: true })
  arr!: number[]

  @Column({ type: 'timestamp' })
  createdAt!: number
}
