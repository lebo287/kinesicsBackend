import {Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RequestedDTO } from './dto/requested.dto';
import {Requested} from './interface/requested.interface';
import { RequestedService } from './requested.service';




@Controller('requestedsigns')
export class RequestedSignsController {



  constructor(private readonly requestedService:RequestedService) {}

  @Get()

  findAll(): Promise<Requested[]> {
    return this.requestedService.findAll();
  }
    
  @Post()

  createWords(@Body() words:   Requested): Promise<Requested> {
    return this.requestedService.Create(words);
  }

  @Get(':id')
  find(@Param('id') id): Promise<Requested>{
     
           return this.requestedService.find(id);
 
  }


  @Put(':id')
  updateProduct(@Param('id') id, @Body() words: Requested ): Promise<Requested>{
      return this.requestedService.update(id, words);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id): Promise<Requested>{
      return this.requestedService.delete(id);
  }
 

}
