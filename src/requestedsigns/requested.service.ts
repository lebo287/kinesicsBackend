import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { Requested } from './interface/requested.interface';

@Injectable()
export class RequestedService {





    constructor(@InjectModel('Requested') private readonly RequesteModel:Model<Requested>)
    {
    
    }
    

    async findAll(): Promise<Requested[]>{
  
        return await this.RequesteModel.find();
      }
      
      async Create(requestedUsers: Requested): Promise<Requested>{
        const newProduct = new this.RequesteModel(requestedUsers);
        return await newProduct.save();
      }
      
      async find(id: string): Promise<Requested>{
        return await this.RequesteModel.findOne({_id:id });
      }
      
      async update(id: string, product: Requested): Promise<Requested>{
              
        return await this.RequesteModel.findByIdAndUpdate(id, product, { new: true});
      }
      
      async delete(id: string): Promise<Requested>{
        return await this.RequesteModel.findByIdAndRemove(id);
      }
}
