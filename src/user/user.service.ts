import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { User } from 'prisma/generated/models';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService
    ) { }

    async createNewUser(user: User) {

        const createNewUser: User = {
            ...user,
            password: await bcrypt.hash(user.password, Number(process.env.BCRYPT_ROUDS))
        }

        if (!await this.prisma.user.findUnique({ where: { email: user.email } })) {

            const userCreated = await this.prisma.user.create({ data: createNewUser })

            return { id: userCreated.id }
        }

        throw new UnprocessableEntityException("E-mail already in use")

    }
}
