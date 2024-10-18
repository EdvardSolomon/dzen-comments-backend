import { Module } from '@nestjs/common';

import { NotificationsController } from './notifications.controller';
import { NotificationsGateway } from './notifications.gateway';
import { NotificationsService } from './notifications.service';

@Module({
	imports: [],
	controllers: [NotificationsController],
	providers: [NotificationsGateway, NotificationsService],
})
export class NotificationsModule {}
