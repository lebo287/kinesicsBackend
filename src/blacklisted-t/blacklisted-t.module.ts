import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {BlacklistedSchema} from './schema/blacklisted.schema';
import { BlacklistedTService } from './blacklisted-t.service';
import { BlacklistedTController } from './blacklisted-t.controller';


@Module({
    imports: [MongooseModule.forFeature([({ name: 'Blacklisted', schema: BlacklistedSchema })])],
    controllers: [BlacklistedTController],
    providers: [BlacklistedTService ]
  

})

export class BlacklistedTModule {}
