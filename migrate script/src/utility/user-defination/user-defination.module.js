"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserDefinationModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var user_defination_controller_1 = require("./user-defination.controller");
var user_defination_service_1 = require("./user-defination.service");
var user_defination_entity_1 = require("./entity/user-defination.entity");
var role_master_entity_1 = require("./entity/role-master.entity");
var role_has_permission_entity_1 = require("./entity/role-has-permission.entity");
var role_define_entity_1 = require("./entity/role-define.entity");
var menulist_entity_1 = require("./entity/menulist.entity");
var system_entity_1 = require("./entity/system.entity");
// import {AuthModule} from '../../auth/auth.module'
var UserDefinationModule = /** @class */ (function () {
    function UserDefinationModule() {
    }
    UserDefinationModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([user_defination_entity_1.USERDEFINATION, role_master_entity_1.ROLEDATAMASTER, role_has_permission_entity_1.ROLEHASPERMISSION, role_define_entity_1.ROLE_DEFINE, menulist_entity_1.MENULIST, system_entity_1.System_master]),
                // AuthModule
            ],
            controllers: [user_defination_controller_1.UserDefinationController],
            providers: [user_defination_service_1.UserDefinationService
            ],
            exports: [user_defination_service_1.UserDefinationService]
        })
    ], UserDefinationModule);
    return UserDefinationModule;
}());
exports.UserDefinationModule = UserDefinationModule;
