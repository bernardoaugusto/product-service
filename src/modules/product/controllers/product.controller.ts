import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiHeader,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CreateProductDTO } from '../dtos/product/request/create.product.dto';
import { ProductResponseDTO } from '../dtos/product/response/product.dto';
import { IdRequestDTO } from '../../../common/dtos/request/id.reques.dto';
import { GetAllPagedResponseInterface } from '../../../common/interfaces/responses.interface';
import { GetAllProductPagedResponseDTO } from '../dtos/product/response/getAll.product.paged.response.dto';
import { GetAllProductRequestDTO } from '../dtos/product/request/getAll.product.request.dto';
import { UpdateProductDTO } from '../dtos/product/request/update.product.dto';

@ApiTags('Product')
@ApiHeader({
  name: 'x-api-key',
  required: true,
})
@ApiHeader({
  name: 'token',
  required: true,
})
@ApiBadRequestResponse({
  description: 'Bad Request',
})
@ApiInternalServerErrorResponse({
  description: 'Sorry we are experiencing technical problems',
})
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma de registros de producto' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created',
    type: ProductResponseDTO,
  })
  async create(@Body() body: CreateProductDTO): Promise<ProductModel> {
    return this.productService.create(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um registro do producto pelo id' })
  @ApiOkResponse({
    description: 'The record has been successfully return',
    type: ProductResponseDTO,
  })
  @ApiNotFoundResponse({ description: 'Product not found' })
  async getOne(@Param() { id }: IdRequestDTO): Promise<ProductModel> {
    const product = await this.productService.getById(id);

    return product;
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os processos judiciais' })
  @ApiOkResponse({
    description: 'Product list',
    type: GetAllProductPagedResponseDTO,
  })
  async getAll(
    @Query() query: GetAllProductRequestDTO,
  ): Promise<ProductModel[] | GetAllPagedResponseInterface<ProductModel>> {
    const withPagination = JSON.parse(query.withPagination || 'true');

    const product = await this.productService.getAll(query, withPagination);

    return product;
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edita um producto pelo id' })
  @ApiOkResponse({
    description: 'The record has been successfully return',
    type: ProductResponseDTO,
  })
  @ApiNotFoundResponse({ description: 'Product not found' })
  async update(
    @Param() { id }: IdRequestDTO,
    @Body() updateBody: UpdateProductDTO,
  ): Promise<ProductModel> {
    return this.productService.update(id, updateBody);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um registro do producto pelo id' })
  @ApiNoContentResponse()
  @ApiNotFoundResponse({ description: 'Product not found' })
  async delete(@Param() { id }: IdRequestDTO): Promise<ProductModel> {
    const product = await this.productService.getById(id);

    return product;
  }
}
