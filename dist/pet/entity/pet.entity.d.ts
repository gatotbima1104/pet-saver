import { GenderEnum } from "src/owner/entities/gender.enum";
import { Owner } from "src/owner/entities/owner.entity";
export declare class Pet {
    id: string;
    name: string;
    type?: string;
    gender?: GenderEnum;
    owner: Owner;
}
