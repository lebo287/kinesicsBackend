import {Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BlacklistedTService } from './blacklisted-t.service';
import { BlacklistedDTO } from './DTO/blacklisted.dto';
import { BlacklistedInterface } from './Interface/blacklisted.interface';

@Controller('blacklisted')
export class BlacklistedTController {
    constructor(private readonly blacklistedService: BlacklistedTService) { }
  
    @Get()
    findAll(): Promise<BlacklistedInterface[]> {
      return this.blacklistedService.findAll();
    }
      
    @Post()
    createProduct(@Body() product: BlacklistedDTO): Promise<BlacklistedInterface> {
      return this.blacklistedService.Create(product);
    }
  
    @Get(':id')
    find(@Param('id') id): Promise<BlacklistedInterface>{
       
             return this.blacklistedService.find(id);
    }
  
  
    @Put(':id')
    updateProduct(@Param('id') id, @Body() product: BlacklistedDTO): Promise<BlacklistedInterface>{
        return this.blacklistedService.update(id, product);
    }
  
    @Delete(':id')
    deleteProduct(@Param('id') id): Promise<BlacklistedInterface>{
        return this.blacklistedService.delete(id);
    }
  }
  
