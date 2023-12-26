"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const owner_entity_1 = require("./entities/owner.entity");
const typeorm_2 = require("typeorm");
let OwnerService = class OwnerService {
    constructor(ownerRepo) {
        this.ownerRepo = ownerRepo;
    }
    async create(createOwnerInput) {
        const owner = this.ownerRepo.create(createOwnerInput);
        await this.ownerRepo.save(owner);
        return owner;
    }
    async findAll() {
        return this.ownerRepo.find();
    }
    async findOne(id) {
        const owner = this.findOwner(id);
        return owner;
    }
    async update(id, updateOwnerInput) {
        const owner = this.findOwner(id);
        await this.ownerRepo.update(id, {
            ...owner,
            ...updateOwnerInput,
            updatedAt: new Date
        });
        const updatedOwner = await this.findOwner(id);
        return updatedOwner;
    }
    async remove(id) {
        const owner = await this.findOwner(id);
        await this.ownerRepo.delete(owner);
        return owner;
    }
    async findOwner(id) {
        const owner = await this.ownerRepo.findOneBy({ id });
        if (!owner) {
            throw new common_1.NotFoundException({
                message: "owner not found"
            });
        }
        return owner;
    }
};
exports.OwnerService = OwnerService;
exports.OwnerService = OwnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(owner_entity_1.Owner)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OwnerService);
//# sourceMappingURL=owner.service.js.map