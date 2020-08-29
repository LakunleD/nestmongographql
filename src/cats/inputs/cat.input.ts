import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CatInput{
    @Field()
    readonly name: string;
    @Field()
    readonly age: number;
    @Field()
    readonly breed: string;
}