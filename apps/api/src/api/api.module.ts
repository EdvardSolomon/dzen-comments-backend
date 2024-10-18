import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { DatabaseModule } from '@app/database';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';

import { AuthModule } from '../auth/auth.module';

import { ApiController } from './api.controller';

@Module({
	imports: [
		DatabaseModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			playground: false,
			autoSchemaFile: join(process.cwd(), 'api-schema.gql'),
			plugins: [ApolloServerPluginLandingPageLocalDefault()],
		}),
		AuthModule,
	],
	controllers: [ApiController],
})
export class ApiModule {}
