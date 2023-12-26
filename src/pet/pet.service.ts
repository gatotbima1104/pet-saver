import { Injectable } from '@nestjs/common';
import { Pet } from './entity/pet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInput } from './dto/create.input';
import { UpdateInput } from './dto/update.input';
import { Owner } from 'src/owner/entities/owner.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet) private petRepo: Repository<Pet>,
    @InjectRepository(Owner) private ownerRepo: Repository<Owner>,
    
  ) {}

  async createPet(createDto: CreateInput, ownerId: string): Promise<Pet> {
    // find owner
    const owner = await this.ownerRepo.findOneBy({
      id: ownerId
    })

    const pet = this.petRepo.create({
      owner,
      ...createDto
    }); // new Pet()

    return await this.petRepo.save(pet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petRepo.find(); // SELECT * pet
  }

  async findById(id: string): Promise<Pet> {
    const pet = await this.petRepo.findOneBy({
      id,
    }); // SELECT * from pet WHERE id ==
    return pet;
  }

  async editPet(editPet: UpdateInput, id: string): Promise<Pet> {
    const pet = await this.petRepo.findOneBy({
      id,
    });

    await this.petRepo.update(id, {});

    await this.petRepo.save(pet);

    return pet;
  }

  async deletePet(id: string): Promise<void> {
    await this.petRepo.delete(id);
  }
}
