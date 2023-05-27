import { IsDefined, IsEmail, IsString } from "class-validator";

export class Auth {

    @IsDefined()
    @IsString()
    @IsEmail()
    email!: string;

    @IsDefined()
    @IsString()
    password!: string;
}
