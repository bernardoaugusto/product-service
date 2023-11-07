import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config as ormConfig } from './config/database/connection';
import { HealthController } from './health.controller';
import { ProductModule } from './modules/product/product.module';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormConfig),
    ProductModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
