import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlacklistedTModule } from './blacklisted-t/blacklisted-t.module';
import { MongooseModule } from '@nestjs/mongoose';

import { WordModule } from './signs/word/word.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

const uri = 'mongodb+srv://cossa:12345@cluster0.krz1i.mongodb.net/BlacklistedUsers';
const uri1 = 'mongodb+srv://cossa:12345@cluster0.krz1i.mongodb.net/Words';



@Module({
  imports: [BlacklistedTModule,
    WordModule,MongooseModule.forRoot(uri), MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
    MongooseModule.forRoot(uri1),
    AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
