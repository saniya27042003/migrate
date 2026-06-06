"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ROLEDATAMASTER = void 0;
var typeorm_1 = require("typeorm");
var role_define_entity_1 = require("./role-define.entity");
var role_has_permission_entity_1 = require("./role-has-permission.entity");
var ROLEDATAMASTER = /** @class */ (function () {
    function ROLEDATAMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ROLEDATAMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], ROLEDATAMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ROLEDATAMASTER.prototype, "STATUS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', "default": function () { return 'CURRENT_TIMESTAMP'; } })
    ], ROLEDATAMASTER.prototype, "USER_CREATED_AT");
    __decorate([
        (0, typeorm_1.OneToOne)(function (type) { return role_has_permission_entity_1.ROLEHASPERMISSION; }, function (Rolehaspermission) { return Rolehaspermission.Role; })
    ], ROLEDATAMASTER.prototype, "Rolehaspermission");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return role_define_entity_1.ROLE_DEFINE; }, function (roleDefine) { return roleDefine.Role; })
    ], ROLEDATAMASTER.prototype, "roleDefine");
    ROLEDATAMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], ROLEDATAMASTER);
    return ROLEDATAMASTER;
}());
exports.ROLEDATAMASTER = ROLEDATAMASTER;
