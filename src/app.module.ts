import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config as ormConfig } from './config/database/connection';
import { HealthController } from './health.controller';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(ormConfig)],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
