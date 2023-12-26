import { OwnerService } from './owner.service';
import { Owner } from './entities/owner.entity';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
export declare class OwnerResolver {
    private readonly ownerService;
    constructor(ownerService: OwnerService);
    createOwner(createOwnerInput: CreateOwnerInput): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: string): Promise<Owner>;
    updateOwner(updateOwnerInput: UpdateOwnerInput, id: string): Promise<Owner>;
    removeOwner(id: string): Promise<Owner>;
}
