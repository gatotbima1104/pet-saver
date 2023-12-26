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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const gender_enum_1 = require("./gender.enum");
const class_validator_1 = require("class-validator");
const pet_entity_1 = require("../../pet/entity/pet.entity");
const profile_entity_1 = require("./profile.entity");
let Owner = class Owner {
};
exports.Owner = Owner;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Owner.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Owner.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(type => gender_enum_1.GenderEnum),
    (0, class_validator_1.IsEnum)(gender_enum_1.GenderEnum, { message: 'invalid gender' }),
    __metadata("design:type", String)
], Owner.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date }),
    (0, graphql_1.Field)(type => Date),
    __metadata("design:type", Date)
], Owner.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date }),
    (0, graphql_1.Field)(type => Date),
    __metadata("design:type", Date)
], Owner.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pet_entity_1.Pet, (pet) => pet.id),
    __metadata("design:type", Array)
], Owner.prototype, "pets", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => profile_entity_1.ProfileOwner),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", profile_entity_1.ProfileOwner)
], Owner.prototype, "profile", void 0);
exports.Owner = Owner = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], Owner);
//# sourceMappingURL=owner.entity.js.map