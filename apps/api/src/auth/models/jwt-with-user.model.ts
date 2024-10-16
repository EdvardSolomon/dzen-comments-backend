import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class JWTWithUser {
	@Field(() => String)
	jwt: string;

	// @Field(() => User)
	// user: User;
}
