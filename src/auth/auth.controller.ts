import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'prisma/generated/models';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    create(@Body() user: Partial<User>) {
        return this.authService.signIn(user.email, user.password)
    }

}
