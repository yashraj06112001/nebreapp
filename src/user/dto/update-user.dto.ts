import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({
    example: '+1234567890',
    description: 'Updated phone number',
  })
  phone_number?: string;
}
