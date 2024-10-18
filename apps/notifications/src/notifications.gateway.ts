import {
	OnGatewayConnection,
	OnGatewayDisconnect,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

import { NotificationsService } from './notifications.service';

@WebSocketGateway({
	cors: {
		origin: '*',
	},
})
export class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
	@WebSocketServer()
	server: Server;

	constructor(private readonly notificationsService: NotificationsService) {
		this.sendHelloWorld();
	}

	handleConnection(client: Socket) {
		console.log('Client connected:', client.id);
	}

	handleDisconnect(client: Socket) {
		console.log('Client disconnected:', client.id);
	}

	sendHelloWorld() {
		setInterval(() => {
			console.log('Sending Hello World notification');
			this.server.emit('notification', {
				id: 1,
				user_name: 'John Doe',
				created_at: new Date(),
				text: 'Это тестовый комментарий.',
				email: 'email.com',
				parent_id: null,
			});
		}, 1000);
	}
}
