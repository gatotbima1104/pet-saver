import { InputType, Int, Field } from '@nestjs/graphql';
import { GenderEnum } from '../entities/gender.enum';
import { IsEnum, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateOwnerInput {
  @Field()
  @IsString()
  name?: string

  @Field(type => GenderEnum, {nullable: true})
  @IsOptional()
  @IsEnum(GenderEnum, {message: 'invalid gender'})
  gender?: GenderEnum

}
