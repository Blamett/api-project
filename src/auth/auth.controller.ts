import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'prisma/generated/models';
import { AuthService } from './auth.service';
import { Auth } from './dto/Auth.model';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    create(@Body() user: Auth) {
        return this.authService.signIn(user.email, user.password)
    }

}
