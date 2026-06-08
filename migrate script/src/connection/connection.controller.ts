import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { DatabaseManagerService } from './connection.service';
import { DynamicConnectionDto } from './dto/connection.dto';

@Controller('migrate/connectOracleDB')
export class DatabaseManagerController {
  constructor(private readonly dbManagerService: DatabaseManagerService) {}

  @Post('connect')
  async connectToDatabase(@Body() connectionData: DynamicConnectionDto) {
    // Notice we changed the service method name to reflect its new behavior
    return await this.dbManagerService.connectToDatabase(connectionData);
  }

  // NEW: Endpoint to fetch tables by passing 'oracle' or 'postgres' in the URL
  @Get('tables/:type')
  async getTables(@Param('type') type: string) {
    const tables = await this.dbManagerService.fetchAllTables(type);
    return {
      success: true,
      count: tables.length,
      data: tables
    };
  }
//   @Get('check-single-sync/:tableName')
// async checkSingleSync(@Param('tableName') tableName: string) {
//   return await this.dbManagerService.checkSingleTableSync(tableName);
// }

}