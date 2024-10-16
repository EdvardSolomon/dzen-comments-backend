import { Field, InputType } from '@nestjs/graphql';

import { IsNotEmpty } from 'class-validator';

@InputType()
export class SignUpInput {
	@Field(() => String)
	@IsNotEmpty()
	username: string;

	@Field(() => String)
	@IsNotEmpty()
	email: string;

	@Field(() => String)
	@IsNotEmpty()
	homepage: string;

	@Field(() => String)
	@IsNotEmpty()
	fingerprint: string;
}
