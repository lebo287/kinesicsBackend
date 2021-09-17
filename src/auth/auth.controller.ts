import {
    Body,Get,
    Controller,
    Post,Put,
    Request,
    UseGuards,
    ValidationPipe,Param
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { User } from './Interface/user.interface';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
    async signUp(
      @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto
    ): Promise<any> {
      let results = await this.authService.signUp(authCredentialsDto);
      return { message: "Successfully Registered"}
    }

  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  async signIn(@Request() req) {
    return this.authService.signIn(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe(@Request() req) {
    return req.user;
  }

  @Get('/users')
  async getAllUsers(){
    const users= await this.authService.getAllUsers();
    return users
  }



  @Get('status/:status')
  find(@Param('status') status): Promise<User[]>{
           return  this.authService.findApi(status);
 
  }

 
  @Put(':id')
  updateProduct(@Param('id') id, @Body() user: User): Promise<User>{
      return this.authService.update(id,user);
  }
  
}
