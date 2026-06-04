import { Controller, Post, Body } from '@nestjs/common';
import { DatabaseManagerService } from './connection.service';
import { DynamicConnectionDto } from './dto/connection.dto';

@Controller('database')
export class DatabaseManagerController {
  constructor(private readonly dbManagerService: DatabaseManagerService) {}

  @Post('connect')
  async connectToDatabase(@Body() connectionData: DynamicConnectionDto) {
    return await this.dbManagerService.testConnection(connectionData);
  }
}