import {
    IsString,
    MinLength
} from 'class-validator'


export class CreateTaskDto{
    @IsString()
    @MinLength(1)
    tittle: string

    @IsString()
    @MinLength(1)
    description: string
}