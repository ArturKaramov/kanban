import { IsEmail, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string

	@IsString()
	@MinLength(7, { message: 'Пароль должен состоять минимум из 7 символов' })
	password: string
}
