import { Body, Controller, Post } from '@nestjs/common';

import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
	constructor(private readonly notificationsService: NotificationsService) {}

	@Post('send')
	sendNotification(@Body('message') message: string) {
		this.notificationsService.sendNotification(message);
		return { status: 'notification', message };
	}
}
