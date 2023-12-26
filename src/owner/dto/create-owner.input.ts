import { InputType, Int, Field } from '@nestjs/graphql';
import { GenderEnum } from '../entities/gender.enum';
import { IsEnum, IsString } from 'class-validator';

@InputType()
export class CreateOwnerInput {
  @Field()
  @IsString()
  name: string

  @Field(type => GenderEnum)
  @IsEnum(GenderEnum, {message: 'invalid gender'})
  gender?: GenderEnum

}
