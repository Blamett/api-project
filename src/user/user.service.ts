import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { User } from 'prisma/generated/models';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from "bcrypt";
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        private authService: AuthService
    ) { }

    async createNewUser(user: User) {

        const createNewUser: User = {
            ...user,
            password: await bcrypt.hash(user.password, Number(process.env.BCRYPT_ROUDS))
        }

        if (!await this.prisma.user.findUnique({ where: { email: user.email } })) {

            const userCreated = await this.prisma.user.create({ data: createNewUser })

            const logIn = await this.authService.signIn(user.email, user.password)

            return { 
                id: userCreated.id,
                token: logIn.token
            }
        }

        throw new UnprocessableEntityException("E-mail already in use")

    }
}
