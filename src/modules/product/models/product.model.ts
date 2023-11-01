import { BaseEntity } from '../../../common/models/BaseEntity.model';
import { Column, Entity } from 'typeorm';

@Entity('judicial_process')
export class ProductModel extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  height: number;

  @Column({ nullable: true })
  width: number;

  @Column({ nullable: true })
  depth: number;

  @Column({ nullable: true })
  volume: number;

  @Column({ nullable: true })
  net_weight: number;

  @Column({ nullable: true })
  gross_weight: number;

  @Column({ nullable: true })
  image_url: string;
}
