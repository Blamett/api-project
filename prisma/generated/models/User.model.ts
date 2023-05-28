import { IsInt, IsDefined, IsDate, IsString, IsBoolean, IsIn, IsOptional, Matches } from "class-validator";
import "./";
import { getEnumValues } from "../helpers";
import { Role } from "../enums";

export class User {

    @IsOptional()
    @IsInt()
    id!: number;

    @IsOptional()
    @IsDate()
    createdAt!: Date;

    @IsOptional()
    @IsDate()
    updatedAt!: Date;

    @IsDefined()
    @IsString()
    name!: string;

    @IsDefined()
    @IsString()
    email!: string;

    @IsDefined()
    @IsString()
    @Matches(new RegExp('(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}'), {
        message: 'Password must be 8 characters long, have one uppercase letter, one digit and one especial character'
    })
    password!: string;

    @IsOptional()
    @IsBoolean()
    validated!: boolean;

    @IsOptional()
    @IsIn(getEnumValues(Role))
    role!: Role;
}
