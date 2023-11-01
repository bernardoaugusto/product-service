import { BaseEntityInterface } from 'src/common/interfaces/baseEntity.interface';

export interface ProductInterface extends BaseEntityInterface {
  name: string;
  code: string;
  description?: string;
  height?: number;
  width?: number;
  depth?: number;
  volume?: number;
  net_weight?: number;
  gross_weight?: number;
  image_url?: string;
}
