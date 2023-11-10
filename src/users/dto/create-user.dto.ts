import { IsEmail, IsNotEmpty, MinLength, MaxLength, Matches } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: 'First name is required' })
    firstName: string;
    @IsNotEmpty({ message: 'Last name is required' })
    lastName: string;
    @IsNotEmpty({ message: 'Username is required' })
    @MinLength(4, { message: 'Username must be at least 4 characters' })
    @MaxLength(20, { message: 'Username must be at most 20 characters' })
    username: string;
    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Invalid email' })
    email: string;
    @IsNotEmpty({ message: 'Passowrd is required' })
    @MinLength(8, { message: 'Password must be at least 8 characters' })
    @MaxLength(20, { message: 'Password must be at most 20 characters' })
    @Matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        { message: 'Password must contain at least 1 symbol, 1 number, 1 uppercase letter, and 1 lowercase letter' }
    )
    password: string;
}
