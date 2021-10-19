
import {Body, Controller, Delete, Get, Param, Post, Put, Res, UploadedFile, UseInterceptors } from '@nestjs/common'; 
import { Word } from './interfaceWord/word.interface';
import { WordService } from './wordservice/word.service';
import { wordDTO } from './wordDTO/word.dto';
import { Observable, of } from 'rxjs';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { Express } from 'express'
@Controller('word')
export class WordController {
constructor(private readonly wordService:WordService){}
//Getting all data 

@Get() 

findAll(): Promise<any>{ 
return this.wordService.findAll().then((data: any[]) => {
    const words: any[] = []
    data.forEach((res: any) => {
        const base = res.pic_gif;
        res.pic_gif = Buffer.from(base, 'base64');
        words.push(res);        
    });
    return words;  
}).catch(err => {
    return err.message;
})
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


 @Post('upload')
 @UseInterceptors(FileInterceptor('file'))
 uploadFile(@UploadedFile() file: Express.Multer.File, @Body() word: wordDTO): Promise<any> {     
     const fileBase64 = file.buffer.toString('base64')
     word.pic_gif = fileBase64;
     return this.wordService.create(word).then(data => {
        return data;
     }).catch(err => {
         return err.message
     })

 }

 @Get(':imgpath')
 seeUploadedFile(@Param('imgpath') file,
 @Res() res) {
     return res.sendFile(file, {root: 'uploads'});
 }
 

 @Get('status/:status')
 findwords(@Param('status') status): Promise<Word[]>{
          return  this.wordService.findwords(status);
 }
} 

 

