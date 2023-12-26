import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from './entities/owner.entity';
import { ProfileOwner } from './entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Owner, ProfileOwner])],
  providers: [OwnerResolver, OwnerService],
})
export class OwnerModule {}
