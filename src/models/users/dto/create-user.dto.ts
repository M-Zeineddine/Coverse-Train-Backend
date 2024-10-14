// create-user.dto.ts
import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Name should not be empty' })
    name: string;

    @IsNotEmpty({ message: 'Email should not be empty' })
    @IsEmail({}, { message: 'Email must be a valid email address' })
    email: string;
}
