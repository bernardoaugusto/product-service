import * as path from 'path';
import { config } from './config/database/connection';

module.exports = {
  ...config,
  entities: [
    path.join(__dirname, 'modules/**/models/*.model{.ts,.js}'),
    path.join(__dirname, 'common/**/models/*.model{.ts,.js}'),
  ],
};
