import { PgDynamicConnectionDto } from './connection/dto/connection.dto';
import { ToPostgresConfig } from './connection/toPostgresConfig';
import { SCHEMAST } from './entity/entity/schemeParameters.entity';

import {
  ConnectionOptions,
  createConnection,
  Connection,
  getConnectionManager,
} from 'typeorm';

export class OrmSet {

  private connection: Connection;

  async connectPostgresDb(
    configDto: PgDynamicConnectionDto,
  ): Promise<Connection> {

    try {

      const config = new ToPostgresConfig(
        configDto.type,
        configDto.host,
        configDto.port,
        configDto.username,
        configDto.password,
        configDto.database,
      );

      const options: ConnectionOptions = {
        name: 'dynamic_postgres', // IMPORTANT
        type: 'postgres',
        host: config.getHost(),
        port: Number(config.getPort()),
        username: config.getUser(),
        password: config.getPassword(),
        database: config.getDatabase(),
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: false,
      };

      const connectionManager = getConnectionManager();

      // Close existing connection if present
      if (connectionManager.has('dynamic_postgres')) {
        const existingConnection =
          connectionManager.get('dynamic_postgres');

        if (existingConnection.isConnected) {
          await existingConnection.close();
        }
      }

      this.connection = await createConnection(options);

      console.log('PostgreSQL Connected Successfully');

      return this.connection;

    } catch (error) {
      console.error(error);
      throw new Error('PostgreSQL Connection Failed');
    }
  }

  getConnection(): Connection {
    return this.connection;
  }
}