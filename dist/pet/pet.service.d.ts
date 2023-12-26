import { Pet } from './entity/pet.entity';
import { Repository } from 'typeorm';
import { CreateInput } from './dto/create.input';
import { UpdateInput } from './dto/update.input';
import { Owner } from 'src/owner/entities/owner.entity';
export declare class PetService {
    private petRepo;
    private ownerRepo;
    constructor(petRepo: Repository<Pet>, ownerRepo: Repository<Owner>);
    createPet(createDto: CreateInput, ownerId: string): Promise<Pet>;
    findAll(): Promise<Pet[]>;
    findById(id: string): Promise<Pet>;
    editPet(editPet: UpdateInput, id: string): Promise<Pet>;
    deletePet(id: string): Promise<void>;
}
