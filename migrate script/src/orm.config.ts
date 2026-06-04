import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  // username: 'postgres',
  // password: 'shubhangi',
  // host: '127.0.0.1',
  // port: 5432,
  // username: 'bankuser', //bhairavnath username
  // password: 'bank@bhairavnath', //bhairavnath password
  // host: '139.59.63.215',
  // database: 'venkatesh',
  // username: 'dbuser', //sidhanerli username
  // password: 'dbuser@compserv', //sidhanerli password
  // port: 5432,
  // host: '82.112.235.98',

  username: 'postgres', //sidhanerli username
  password: '1234', //sidhanerli password
  port: 5432,
  host: 'localhost',

  database: 'nirmiti_db_backup',

  // database: 'SANJAYSINH',
  // database: 'datta_pargaon',
  // database: 'SS_KOTOLI',
  // database: 'testpargaon',
  // type: 'postgres',
  // username: 'dbuser', //sidhanerli username
  // password: 'dbuser@compserv', //sidhanerli password
  // port: 5432,
  // host: '82.112.235.98',
  // database: 'TESTCOMPSERV',


  synchronize: false,
  // synchronize: true,
  logging: false,
  // logging: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ["dist/migration/*{.ts,.js}"],
  cli: {
    migrationsDir: 'src/migration'
  },
};