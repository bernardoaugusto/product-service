import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config();

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [
    path.join(__dirname, '..', '..', 'modules/**/models/*.model{.ts,.js}'),
  ],
  migrations: [path.join(__dirname, '.', 'migrations/*.ts')],
  synchronize: false,
};

export function getDatabaseConfigConnectionQA(): TypeOrmModuleOptions {
  return {
    type: 'sqlite',
    database: ':memory:',
    entities: ['dist/modules/**/models/*.model.{ts,js}'],
    dropSchema: true,
    migrationsRun: true,
    synchronize: true,
    logging: false,
  };
}
