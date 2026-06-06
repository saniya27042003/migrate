"use strict";
exports.__esModule = true;
exports.config = void 0;
// 1. Define your dynamic variables here (or import them from your service/UI)
var pgUser = 'postgres';
var pgPassword = 'swikar1637';
var pgHost = 'localhost';
var pgPort = 5432;
var pgDatabase = 'nirmiti';
// 🌟 2. Build the Postgres connection string exactly like you did for Oracle
var pgConnectionString = "postgresql://".concat(pgUser, ":").concat(pgPassword, "@").concat(pgHost, ":").concat(pgPort, "/").concat(pgDatabase);
exports.config = {
    type: 'postgres',
    // 🌟 3. Use 'url' instead of individually listing host, port, user, etc.
    url: pgConnectionString,
    synchronize: false,
    logging: false,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ["dist/migration/*{.ts,.js}"],
    cli: {
        migrationsDir: 'src/migration'
    }
};
