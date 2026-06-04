/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createConnection, ConnectionOptions, getConnectionManager } from 'typeorm';
import { DynamicConnectionDto } from './dto/connection.dto';

@Injectable()
export class DatabaseManagerService {

  async testConnection(payload: DynamicConnectionDto) {
    // Generate a unique name for this temporary connection
    const connectionName = `dynamic_${payload.type}_${Date.now()}`;

    // Map the UI payload to TypeORM configuration options
    const options: ConnectionOptions = {
      name: connectionName,
      type: payload.type as any, // 'postgres' or 'oracle'
      host: payload.host,
      port: Number(payload.port),
      username: payload.username,
      password: payload.password,
      // If it's postgres, use 'database'. If it's oracle, use 'sid' (or serviceName)
      database: payload.type === 'postgres' ? payload.database : undefined,
      serviceName: payload.type === 'oracle' ? payload.database : undefined,
      synchronize: false,
      logging: false,
      entities: [], // No entities needed just to test a connection
    };

    try {
      // Attempt to establish the connection
      const connection = await createConnection(options);

      // If we get here, the connection was successful!
      // Close it immediately so we don't leak memory on the server
      await connection.close();

      return { 
        success: true, 
        message: `Successfully connected to ${payload.type.toUpperCase()} database!` 
      };

    } catch (error) {
      // If connection fails, catch the error and send it back to the frontend
      throw new HttpException(
        { 
          success: false, 
          message: `Failed to connect: ${error.message}` 
        }, 
        HttpStatus.BAD_REQUEST
      );
    }
  }
}