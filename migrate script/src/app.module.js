"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var orm_config_1 = require("./orm.config");
var user_defination_module_1 = require("./utility/user-defination/user-defination.module");
var migrate_module_1 = require("./migrate/migrate.module");
var auth_module_1 = require("./auth/auth.module");
var connection_module_1 = require("./connection/connection.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forRoot(orm_config_1.config), typeorm_1.TypeOrmModule.forFeature([]),
                user_defination_module_1.UserDefinationModule,
                migrate_module_1.MigrateModule,
                auth_module_1.AuthModule,
                common_1.HttpModule,
                connection_module_1.ConnectionModule
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
