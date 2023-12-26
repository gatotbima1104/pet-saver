import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
import {} from 'apollo-server'

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner) private ownerRepo: Repository<Owner>
  ){}

  async create(createOwnerInput: CreateOwnerInput) {
    //create owner
    const owner = this.ownerRepo.create(createOwnerInput)
    //save created owner
    await this.ownerRepo.save(owner)
    //return
    return owner
  }

  async findAll(): Promise<Owner[]> {
    //return all owner
    return this.ownerRepo.find();
  }

  async findOne(id: string): Promise<Owner> {
    //use findOwner
    const owner = this.findOwner(id)
    //return
    return owner
  }

  async update(id: string, updateOwnerInput: UpdateOwnerInput): Promise<Owner> {
    //find owner
    const owner = this.findOwner(id)

    //update owner
    await this.ownerRepo.update(id, {
      ...owner,
      ...updateOwnerInput,
      updatedAt: new Date
    })

    //find updated owner
    const updatedOwner = await this.findOwner(id)
    //return
    return updatedOwner
  }

  async remove(id: string): Promise<Owner>{
    //find owner
    const owner = await this.findOwner(id)
    //delete owner
    await this.ownerRepo.delete(owner)
    //return
    return owner
  }

  //method find owner
  async findOwner(id: string):Promise<Owner> {
    const owner = await this.ownerRepo.findOneBy({ id })
    //exception
    if(!owner){
      throw new NotFoundException({
        message: "owner not found"
      })
    }
    return owner
  }
}
