import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


import { RequestedInterface } from './interface/requested.interface';

@Injectable()
export class RequestedService {





    constructor(@InjectModel('Requested') private readonly RequesteModel:Model<RequestedInterface>)
    {
    
    }
    

    async findAll(): Promise<RequestedInterface[]>{
  
        return await this.RequesteModel.find();
      }
      
      async Create(blacklistedUsers: RequestedInterface): Promise<RequestedInterface>{
        const newProduct = new this.RequesteModel(blacklistedUsers);
        return await newProduct.save();
      }
      
      async find(id: string): Promise<RequestedInterface>{
        return await this.RequesteModel.findOne({_id:id });
      }
      
      async update(id: string, product: RequestedInterface ): Promise<RequestedInterface>{
              
        return await this.RequesteModel.findByIdAndUpdate(id, product, { new: true});
      }
      
      async delete(id: string): Promise<RequestedInterface>{
        return await this.RequesteModel.findByIdAndRemove(id);
      }
}
