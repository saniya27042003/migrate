"use strict";
exports.__esModule = true;
exports.ToPostgresConfig = void 0;
var ToPostgresConfig = /** @class */ (function () {
    function ToPostgresConfig(type, host, port, user, password, database) {
        this.type = type;
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.database = database;
    }
    ToPostgresConfig.prototype.getType = function () {
        return this.type;
    };
    ToPostgresConfig.prototype.setType = function (type) {
        this.type = type;
    };
    ToPostgresConfig.prototype.getHost = function () {
        return this.host;
    };
    ToPostgresConfig.prototype.setHost = function (host) {
        this.host = host;
    };
    ToPostgresConfig.prototype.getPort = function () {
        return this.port;
    };
    ToPostgresConfig.prototype.setPort = function (port) {
        this.port = port;
    };
    ToPostgresConfig.prototype.getUser = function () {
        return this.user;
    };
    ToPostgresConfig.prototype.setUser = function (user) {
        this.user = user;
    };
    ToPostgresConfig.prototype.getPassword = function () {
        return this.password;
    };
    ToPostgresConfig.prototype.setPassword = function (password) {
        this.password = password;
    };
    ToPostgresConfig.prototype.getDatabase = function () {
        return this.database;
    };
    ToPostgresConfig.prototype.setDatabase = function (database) {
        this.database = database;
    };
    return ToPostgresConfig;
}());
exports.ToPostgresConfig = ToPostgresConfig;
