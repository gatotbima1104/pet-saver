import { PetService } from './pet.service';
import { Pet } from './entity/pet.entity';
import { CreateInput } from './dto/create.input';
export declare class PetResolver {
    private petService;
    constructor(petService: PetService);
    pets(): Promise<Pet[]>;
    pet(id: string): Promise<Pet>;
    createPet(createDto: CreateInput, ownerId: string): Promise<Pet>;
}
