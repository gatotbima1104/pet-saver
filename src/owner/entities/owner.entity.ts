import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { GenderEnum } from './gender.enum';
import { IsEnum } from 'class-validator';
import { Pet } from 'src/pet/entity/pet.entity';
import { ProfileOwner } from './profile.entity';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string

  @Field()
  @Column()
  name: string

  @Column()
  @Field(type => GenderEnum)
  @IsEnum(GenderEnum, {message: 'invalid gender'})
  gender?: GenderEnum

  @Column({ default: new Date})
  @Field(type=> Date)
  createdAt: Date

  @Column({ default: new Date})
  @Field(type=> Date)
  updatedAt: Date

  @OneToMany(()=> Pet, (pet) => pet.id )
  pets: Pet[]

  @OneToOne(()=> ProfileOwner)
  @JoinColumn()
  profile?: ProfileOwner
}
