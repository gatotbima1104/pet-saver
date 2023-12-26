import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PetModule } from './pet/pet.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerModule } from './owner/owner.module';
import typeOrmConfig from './config/database/typeorm.config';
import { GenderEnum } from './owner/entities/gender.enum'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PetModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    OwnerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
