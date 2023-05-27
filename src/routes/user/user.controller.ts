
import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'prisma/generated/models';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Post()
    create(@Body() user: User) {
      return this.userService.createNewUser(user)
    }  
}