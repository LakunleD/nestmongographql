import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class CatType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly name: string;
    @Field()
    readonly age: number;
    @Field()
    readonly breed: string;
}