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

  @Column({ type: 'tinyint' })
  stock!: number

  @Column({ type: 'double' })
  price!: number

  @Column()
  description!: string

  @Column({ name: 'is_active', type: 'tinyint' })
  isActive!: number
}
