import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator"

export class CreateUserDto {
    @IsOptional()
    user_id ?: number

    @IsEmail()
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
