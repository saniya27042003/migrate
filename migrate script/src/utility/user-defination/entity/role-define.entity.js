"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ROLE_DEFINE = void 0;
var typeorm_1 = require("typeorm");
var role_master_entity_1 = require("./role-master.entity");
var user_defination_entity_1 = require("./user-defination.entity");
var ROLE_DEFINE = /** @class */ (function () {
    function ROLE_DEFINE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ROLE_DEFINE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], ROLE_DEFINE.prototype, "UserId");
    __decorate([
        (0, typeorm_1.Column)()
    ], ROLE_DEFINE.prototype, "RoleId");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return role_master_entity_1.ROLEDATAMASTER; }, function (Role) { return Role.id; }),
        (0, typeorm_1.JoinColumn)({ name: "RoleId" })
    ], ROLE_DEFINE.prototype, "Role");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return user_defination_entity_1.USERDEFINATION; }, function (user) { return user.id; }),
        (0, typeorm_1.JoinColumn)({ name: "UserId" })
    ], ROLE_DEFINE.prototype, "user");
    ROLE_DEFINE = __decorate([
        (0, typeorm_1.Entity)()
    ], ROLE_DEFINE);
    return ROLE_DEFINE;
}());
exports.ROLE_DEFINE = ROLE_DEFINE;
