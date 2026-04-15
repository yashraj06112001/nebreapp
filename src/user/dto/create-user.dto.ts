import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: '+1234567890', description: 'Phone number of the user' })
  phoneNumber: string;
}
