import { IsDate, IsDefined, IsEmail, IsIn, IsInt, IsOptional, IsString, Matches } from "class-validator";
import { Role } from "../enums";
import { getEnumValues } from "../helpers";
import "./";

export class User {

    @IsOptional()
    @IsInt()
    id?: number;

    @IsOptional()
    @IsDate()
    createdAt?: Date;

    @IsOptional()
    @IsDate()
    updatedAt?: Date;

    @IsDefined()
    @IsString()
    name!: string;

    @IsDefined()
    @IsString()
    @IsEmail()
    email!: string;

    @IsDefined()
    @IsString()
    @Matches(new RegExp('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}'), {
        message: 'Password must be 8 characters long, have one uppercase letter, one digit and one especial character'
    })
    password!: string;

    @IsOptional()
    @IsIn(getEnumValues(Role))
    role?: Role;
}
