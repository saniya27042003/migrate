/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseManagerController } from './connection.controller';
import { DatabaseManagerService } from './connection.service';

@Module({
  controllers: [DatabaseManagerController],
  providers: [DatabaseManagerService],
  exports: [DatabaseManagerService], // Export it just in case your migrate module needs to use it later!
})
export class ConnectionModule {}