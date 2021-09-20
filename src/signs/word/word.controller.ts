
import {Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'; 
import { Word } from './interfaceWord/word.interface';
import { WordService } from './wordservice/word.service';
import { wordDTO } from './wordDTO/word.dto';

@Controller('word')
export class WordController {
constructor(private readonly wordService:WordService){}

//Getting all data 

@Get() 

findAll(): Promise<Word[]>{ 

return this.wordService.findAll(); 

} 

//Get or search data by id 

@Get(':id') 

find(@Param('id') id): Promise<Word>{ 

return this.wordService.find(id); 

} 

//Add data 

@Post() 

createWord(@Body() word: wordDTO): Promise<Word> 

{ 

return this.wordService.create(word); 

} 
//Update using id 

@Put(':id') 

updateWord(@Param('id') id, @Body() word: wordDTO): Promise<Word> 

{ 

return this.wordService.update(id, word); 

} 

//delete using id 

@Delete(':id') 

deleteSign(@Param('id') id): Promise<Word>{ 

return this.wordService.delete(id); 

} 

 
 

} 

 

