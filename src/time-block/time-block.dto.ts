import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator'

export class TimeBlockDto {
	@IsString()
	name: string

	@IsOptional()
	@IsString()
	color?: string

	@IsNumber()
	duration: number

	@IsNumber()
	@IsOptional()
	order: number
}

export class UpdateOrderDto {
	@IsArray()
	@IsString({ each: true })
	ids: string[]
}
