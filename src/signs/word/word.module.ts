import { Module } from '@nestjs/common';
import { WordService } from './wordservice/word.service';
import { MongooseModule } from '@nestjs/mongoose';
import { wordSchema } from './schema/word.schema';
import { WordController } from './word.controller';




@Module({
  imports:[MongooseModule.forFeature([{name:'Word',schema:wordSchema}])],
  controllers:[WordController],
  providers: [WordService]
})
export class WordModule {}
