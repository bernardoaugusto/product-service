import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_PIPE } from '@nestjs/core';
import ProductRepository from './repositories/product.repository';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { ProductModel } from './models/product.model';

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel])],
  controllers: [ProductController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    ProductService,
  ],
  exports: [],
})
export class ProductModule {}
