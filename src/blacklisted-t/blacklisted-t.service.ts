
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BlacklistedInterface } from './Interface/blacklisted.interface';


@Injectable()
export class BlacklistedTService {

    constructor(@InjectModel('Blacklisted') private readonly blacklistedModel:Model<BlacklistedInterface>)
    {
    
    }
    

    async findAll(): Promise<BlacklistedInterface[]>{
  
        return await this.blacklistedModel.find();
      }
      
      async Create(blacklistedUsers: BlacklistedInterface): Promise<BlacklistedInterface>{
        const newProduct = new this.blacklistedModel(blacklistedUsers);
        return await newProduct.save();
      }
      
      async find(id: string): Promise<BlacklistedInterface>{
        return await this.blacklistedModel.findOne({_id:id });
      }
      
      async update(id: string, product: BlacklistedInterface): Promise<BlacklistedInterface>{
        return await this.blacklistedModel.findByIdAndUpdate(id, product);
      }
      
      async delete(id: string): Promise<BlacklistedInterface>{
        return await this.blacklistedModel.findByIdAndRemove(id);
      }
      
      async blacklistedUsers(): Promise<BlacklistedInterface[]>{
        return await this.blacklistedModel.find({blacklisted:true });
      }
      
      }
      
