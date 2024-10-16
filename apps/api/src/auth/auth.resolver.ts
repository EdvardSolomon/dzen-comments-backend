import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { SignUpInput } from './inputs/sign-up.input';
import { JWTWithUser } from './models/jwt-with-user.model';

@Resolver()
export class AuthResolver {
	@Query(() => Boolean)
	test() {
		return true;
	}

	@Mutation(() => JWTWithUser)
	signUp(@Args('input') input: SignUpInput): JWTWithUser {
		console.log(input);

		return {
			jwt: 'test',
		};
	}
}
