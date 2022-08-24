import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get()
  async findOne(@User('firstName') firstName: string) {
    console.log(`Hello ${firstName}`);
  }
}
