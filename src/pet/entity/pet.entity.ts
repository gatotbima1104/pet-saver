import { Field, Int, ObjectType } from "@nestjs/graphql";
import { GenderEnum } from "src/owner/entities/gender.enum";
import { Owner } from "src/owner/entities/owner.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Pet {
    @PrimaryGeneratedColumn('uuid')
    @Field()
    id: string

    @Column({ unique: true })
    @Field()
    name: string

    @Column({ nullable: true })
    @Field({ nullable: true })
    type?: string

    @Column({nullable: true})
    @Field({ nullable: true})
    gender?: GenderEnum

    @ManyToOne(()=> Owner, (owner)=> owner.pets)
    owner: Owner
}