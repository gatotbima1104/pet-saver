import { Field, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class ProfileOwner{
    @PrimaryGeneratedColumn('uuid')
    @Field()
    id: string

    @Column()
    @IsOptional()
    @Field({nullable: true})
    address?: string

    @Field()
    @Column({ default: false})
    isPetLover?: boolean

    @Field()
    @Column()
    avatar?: string

    @Column({default: new Date})
    @Field(type=> Date)
    updatedAt: Date
}