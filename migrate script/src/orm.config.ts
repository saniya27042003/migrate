/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// 1. Define your dynamic variables here (or import them from your service/UI)
const pgUser = 'postgres';
const pgPassword = '070502';
const pgHost = 'localhost';
const pgPort = 5432;
const pgDatabase = 'nirmiti_new';

// 🌟 2. Build the Postgres connection string exactly like you did for Oracle
const pgConnectionString = `postgresql://${pgUser}:${pgPassword}@${pgHost}:${pgPort}/${pgDatabase}`;

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  
  // 🌟 3. Use 'url' instead of individually listing host, port, user, etc.
  url: pgConnectionString, 

  synchronize: false,
  logging: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ["dist/migration/*{.ts,.js}"],
  cli: {
    migrationsDir: 'src/migration'
  },
};