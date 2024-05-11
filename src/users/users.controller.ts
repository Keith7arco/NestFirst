import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {
    constructor(private UsersService:UsersService){}

    @ApiTags('Users')
    @Get('/users')
    getUsers(){
        return this.UsersService.getUsers();
    }

    @Post('/users')
    @ApiTags('Users')
    createUsers(@Body() user:CreateUserDto){
        return this.UsersService.createUser(user);
    }
}
