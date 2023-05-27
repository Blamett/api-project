import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) { }

    async signIn(email: string, password: string) {

        const user = await this.prisma.user.findUnique({ where: { email: email } })

        if(user && await bcrypt.compare(password, user.password)){
            
            const payload = {sub: user.id, email: user.email}

            const token = this.jwtService.sign(payload)
            
            return {token: token}
        }

        else{
            throw new NotAcceptableException("E-mail or password invalid")
        }
    }
}
