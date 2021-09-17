import {Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequestedDTO } from './dto/requested.dto';
import {RequestedInterface} from './interface/requested.interface';
import { RequestedService } from './requested.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';



@Controller('requestedsigns')
export class RequestedSignsController {



  constructor(private readonly requestedService:RequestedService) { }
  @Get()
  findAll(): Promise<RequestedInterface[]> {
    return this.requestedService.findAll();
  }
    
  @Post()
  createProduct(@Body() product:   RequestedInterface  ): Promise<RequestedInterface> {
    return this.requestedService.Create(product);
  }

  @Get(':id')
  find(@Param('id') id): Promise<RequestedInterface>{
     
           return this.requestedService.find(id);
 
  }


  @Put(':id')
  updateProduct(@Param('id') id, @Body() product: RequestedInterface ): Promise<RequestedInterface>{
      return this.requestedService.update(id, product);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id): Promise<RequestedInterface>{
      return this.requestedService.delete(id);
  }
 

}
