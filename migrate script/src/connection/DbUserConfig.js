"use strict";
exports.__esModule = true;
exports.DbUserConfig = void 0;
var DbUserConfig = /** @class */ (function () {
    function DbUserConfig(host, port, user, password, 
    // service: string,
    sid) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        // this.service = service;
        this.sid = sid;
    }
    DbUserConfig.prototype.getHost = function () {
        return this.host;
    };
    DbUserConfig.prototype.setHost = function (host) {
        this.host = host;
    };
    DbUserConfig.prototype.getPort = function () {
        return this.port;
    };
    DbUserConfig.prototype.setPort = function (port) {
        this.port = port;
    };
    DbUserConfig.prototype.getUser = function () {
        return this.user;
    };
    DbUserConfig.prototype.setUser = function (user) {
        this.user = user;
    };
    DbUserConfig.prototype.getPassword = function () {
        return this.password;
    };
    DbUserConfig.prototype.setPassword = function (password) {
        this.password = password;
    };
    // public getService(): string {
    //     return this.service;
    // }
    // setService(service: string): void {
    //     this.service = service;
    // }
    DbUserConfig.prototype.getSid = function () {
        return this.sid;
    };
    DbUserConfig.prototype.setSid = function (sid) {
        this.sid = sid;
    };
    return DbUserConfig;
}());
exports.DbUserConfig = DbUserConfig;
