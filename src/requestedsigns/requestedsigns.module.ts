import { Module } from '@nestjs/common';
import { RequestedService } from './requested.service';
import { RequestedSignsController } from './requestedsigns.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RequestedSchema } from './schemas/requested.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Requested', schema:  RequestedSchema }]),
  ],
  providers: [RequestedService],
  controllers: [RequestedSignsController],
})
export class RequestedsignsModule {}


