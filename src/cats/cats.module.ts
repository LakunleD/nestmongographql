import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsResolver } from './cats.resolver';


@Module({
  providers: [CatsResolver],
})
export class CatsModule {}
