/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { createConnection, ConnectionOptions, getConnectionManager, getConnection } from 'typeorm';
import { DynamicConnectionDto } from './dto/connection.dto';
import  * as oracledb from 'oracledb';

@Injectable()
export class DatabaseManagerService {

  async connectToDatabase(payload: DynamicConnectionDto) {
    // Use the database type as the connection name so we can retrieve it later
    // 'oracle' for your XEPDB1 source, 'postgres' for your NIRMITI target
    const connectionName = payload.type; 
    const connectionManager = getConnectionManager();

    // If a connection with this name already exists, close it before reconnecting
    if (connectionManager.has(connectionName)) {
      const existingConnection = connectionManager.get(connectionName);
      if (existingConnection.isConnected) {
        await existingConnection.close();
      }
    }

    const options: ConnectionOptions = {
      name: connectionName,
      type: payload.type as any,
      host: payload.host,
      port: Number(payload.port),
      username: payload.username,
      password: payload.password,
      database: payload.type === 'postgres' ? payload.database : undefined,
      serviceName: payload.type === 'oracle' ? payload.database : undefined,
      synchronize: false,
      logging: false,
      entities: [], 
    };

    try {

  console.log('PAYLOAD');
  console.log(payload);

  console.log('OPTIONS');
  console.log(options);

  if (payload.type === 'oracle') {

    const conn = await oracledb.getConnection({
      user: payload.username,
      password: payload.password,
      connectString:
        `${payload.host}:${payload.port}/${payload.database}`
    });

    await conn.close();

    return {
      success: true,
      message: 'Oracle connected successfully'
    };
  }

  await createConnection(options);

  return {
    success: true,
    message: 'Postgres connected successfully'
  };

} catch (error) {

  console.error('========== FULL ERROR ==========');
  console.error(error);
  console.error('===============================');

  throw new HttpException(
    {
      success: false,
      message: `Failed to connect: ${error.message}`
    },
    HttpStatus.BAD_REQUEST
  );
}
}
async fetchAllTables(dbType: string): Promise<string[]> {

  try {

    const connection = getConnection(dbType);

    if (dbType === 'postgres') {

      const result = await connection.query(`
        SELECT tablename
        FROM pg_tables
        WHERE schemaname = 'public'
      `);

      return result.map(row =>
        row.tablename.toUpperCase()
      );
    }

    if (dbType === 'oracle') {

      const result = await connection.query(`
        SELECT table_name
        FROM user_tables
      `);

      return result.map(row =>
        row.TABLE_NAME.toUpperCase()
      );
    }

    throw new Error('Unsupported database type');

  } catch (error) {

    throw new HttpException(
      {
        success: false,
        message: `Failed to fetch tables: ${error.message}`
      },
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}
}