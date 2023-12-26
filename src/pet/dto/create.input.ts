import { Field, InputType } from "@nestjs/graphql";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { GenderEnum } from "src/owner/entities/gender.enum";

@InputType()
export class CreateInput {
    @Field()
    @IsString()
    @IsNotEmpty()
    name: string

    @Field()
    @IsEnum({enum: GenderEnum})
    gender?: GenderEnum

    @Field({ nullable: true})
    type?: string
}