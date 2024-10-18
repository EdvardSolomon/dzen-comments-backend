import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
	sendNotification(message: string) {
		console.log('Sending notification:', message);
	}
}
