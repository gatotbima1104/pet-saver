import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PetService } from './pet.service';
import { Pet } from './entity/pet.entity';
import { CreateInput } from './dto/create.input';

@Resolver(of => Pet)
export class PetResolver {
    constructor(private petService: PetService){}

    @Query(returns => [Pet])
    async pets(): Promise<Pet[]>{
        return this.petService.findAll()
    }

    @Query(returns => Pet, {nullable: true})
    async pet(@Args('id') id: string): Promise<Pet>{
        return this.petService.findById(id)
    }

    @Mutation(returns => Pet)
    createPet(@Args('create') createDto: CreateInput, ownerId: string): Promise<Pet>{
        return this.petService.createPet(createDto, ownerId)
    }

}
