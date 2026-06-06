"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.USERDEFINATION = void 0;
var typeorm_1 = require("typeorm");
// import { Exclude } from 'class-transformer';
var role_define_entity_1 = require("./role-define.entity");
var own_branch_master_entity_1 = require("../../../entity/entity/own-branch-master.entity");
var USERDEFINATION = /** @class */ (function () {
    function USERDEFINATION() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], USERDEFINATION.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], USERDEFINATION.prototype, "F_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], USERDEFINATION.prototype, "L_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], USERDEFINATION.prototype, "DOB");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], USERDEFINATION.prototype, "MOB_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], USERDEFINATION.prototype, "EMAIL");
    __decorate([
        (0, typeorm_1.Column)()
    ], USERDEFINATION.prototype, "USER_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], USERDEFINATION.prototype, "PASSWORD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], USERDEFINATION.prototype, "STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], USERDEFINATION.prototype, "PROFILE_PATH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], USERDEFINATION.prototype, "EXP_DATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDEFINATION.prototype, "LOG_STATUS");
    __decorate([
        (0, typeorm_1.Column)()
    ], USERDEFINATION.prototype, "branchId");
    __decorate([
        (0, typeorm_1.Column)({ type: 'timestamp', "default": function () { return 'CURRENT_TIMESTAMP'; } })
    ], USERDEFINATION.prototype, "USER_CREATED_AT");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return role_define_entity_1.ROLE_DEFINE; }, function (RoleDefine) { return RoleDefine.user; })
    ], USERDEFINATION.prototype, "RoleDefine");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (branch) { return branch.id; }),
        (0, typeorm_1.JoinColumn)({ name: 'branchId' })
    ], USERDEFINATION.prototype, "branch");
    USERDEFINATION = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(['USER_NAME'])
    ], USERDEFINATION);
    return USERDEFINATION;
}());
exports.USERDEFINATION = USERDEFINATION;
