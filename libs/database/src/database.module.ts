import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { config } from '@app/common';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			...config.DB,
			synchronize: false,
			logging: false,
			autoLoadEntities: true,
		}),
	],
})
export class DatabaseModule {}
