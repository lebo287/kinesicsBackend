import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'; 
import { InjectModel } from '@nestjs/mongoose'; 
import { Word } from '../interfaceWord/word.interface';
@Injectable()
export class WordService {

constructor(@InjectModel('Word') private readonly WordModel: Model<Word>) { } 

//get all data 
async findAll(): Promise<Word[]>{ 

return await this.WordModel.find(); 

} 

//get by id 

async find(id: string): Promise<Word>{ 

return await this.WordModel.findOne({_id:id }); 

} 

//add new data 

async create(word: Word): Promise<Word>{ 

const newWord = new this.WordModel(word); 

return await newWord.save(); 

} 

//update using id 

async update(id: string, word: Word): Promise<Word>{ 

return await this.WordModel.findByIdAndUpdate(id, word, {new: true}); 

} 

//delete using id 

async delete(id: string): Promise<Word>{ 

return await this.WordModel.findByIdAndRemove(id);
}


async findwords(value: boolean): Promise<Word[]>{
    return await this.WordModel.find({approved:value});
  }

}

