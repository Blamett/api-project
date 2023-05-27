import { IsInt, IsDefined, IsDate, IsString, IsIn, IsEmail, IsOptional, Length } from "class-validator";
import "./";
import { getEnumValues } from "../helpers";
import { Role } from "../enums";

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
    @Length(6)
    password!: string;

    @IsOptional()
    @IsIn(getEnumValues(Role))
    role?: Role;
}
