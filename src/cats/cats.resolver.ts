import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class CatsResolver {
//   constructor(
//     private authorsService: CatsService,
//     private postsService: PostsService,
//   ) {}

  @Query(returns => String)
  async hello() {
    return 'hello'
  }
}
