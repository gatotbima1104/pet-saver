import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class UpdateInput{
    @IsString()
    @Field()
    name?: String

    @IsString()
    @Field()
    type?: String
}