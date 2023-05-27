import { IsInt, IsDefined, IsDate, IsString, IsIn } from "class-validator";
import "./";
import { getEnumValues } from "../helpers";
import { Role } from "../enums";

export class User {

    @IsInt()
    id!: number;

    @IsDate()
    createdAt!: Date;

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
    password!: string;

    @IsIn(getEnumValues(Role))
    role!: Role;
}
