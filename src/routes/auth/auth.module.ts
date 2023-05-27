import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '2d' },
          }),
    ],
    controllers: [
        AuthController
    ],
    providers: [
        AuthService,
        PrismaService
    ],
    exports: [
        AuthService
    ]
})
export class AuthModule { }
