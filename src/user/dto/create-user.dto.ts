import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator"
import { IsExist } from "src/etc/validator/exist-validator"
import { IsUnique } from "src/etc/validator/unique-validator"
import { User } from "../entities/user.entity"

export class CreateUserDto {
    @IsOptional()
    user_id ?: number

    @IsEmail()
    @IsUnique([User,'email'])
    email: string

    @IsString()
    @MinLength(6)
    @MaxLength(200)
    user_name: string

    @IsString()
    @MaxLength(32)
    @MinLength(8)
    password: string
}
