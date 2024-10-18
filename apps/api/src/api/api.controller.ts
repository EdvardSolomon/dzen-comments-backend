import { Controller, Get } from '@nestjs/common';

@Controller()
export class ApiController {
	@Get('health')
	getHealth(): boolean {
		return true;
	}
}
