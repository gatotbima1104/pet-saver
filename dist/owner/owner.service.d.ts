import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';
import { Repository } from 'typeorm';
export declare class OwnerService {
    private ownerRepo;
    constructor(ownerRepo: Repository<Owner>);
    create(createOwnerInput: CreateOwnerInput): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: string): Promise<Owner>;
    update(id: string, updateOwnerInput: UpdateOwnerInput): Promise<Owner>;
    remove(id: string): Promise<Owner>;
    findOwner(id: string): Promise<Owner>;
}
