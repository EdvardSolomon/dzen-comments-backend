import { NestFactory } from '@nestjs/core';

import { NotificationsModule } from './notifications.module';

async function bootstrap() {
	const app = await NestFactory.create(NotificationsModule);
	const port = 3001;
	await app.listen(port);
	console.log(`Notifications server is listening on port ${port}`);
}
bootstrap();
