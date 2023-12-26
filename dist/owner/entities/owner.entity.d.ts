import { GenderEnum } from './gender.enum';
import { Pet } from 'src/pet/entity/pet.entity';
import { ProfileOwner } from './profile.entity';
export declare class Owner {
    id: string;
    name: string;
    gender?: GenderEnum;
    createdAt: Date;
    updatedAt: Date;
    pets: Pet[];
    profile?: ProfileOwner;
}
