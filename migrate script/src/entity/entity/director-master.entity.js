"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DIRECTORMASTER = void 0;
var typeorm_1 = require("typeorm");
var city_master_entity_1 = require("./city-master.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var DIRECTORMASTER = /** @class */ (function () {
    function DIRECTORMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DIRECTORMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], DIRECTORMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], DIRECTORMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 60, nullable: true })
    ], DIRECTORMASTER.prototype, "DESIGNATION");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: true })
    ], DIRECTORMASTER.prototype, "AC_ADDR1");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: true })
    ], DIRECTORMASTER.prototype, "AC_ADDR2");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: true })
    ], DIRECTORMASTER.prototype, "AC_ADDR3");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIRECTORMASTER.prototype, "AC_PIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], DIRECTORMASTER.prototype, "IS_CURRENT_BODY_MEMBER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], DIRECTORMASTER.prototype, "SMS_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIRECTORMASTER.prototype, "AC_MOBILENO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIRECTORMASTER.prototype, "AC_CTCODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return city_master_entity_1.CITYMASTER; }, function (directormaster) { return directormaster.castmast; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idmasterID" })
    ], DIRECTORMASTER.prototype, "directormaster");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIRECTORMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.director; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], DIRECTORMASTER.prototype, "BranchCodeMaster");
    DIRECTORMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], DIRECTORMASTER);
    return DIRECTORMASTER;
}());
exports.DIRECTORMASTER = DIRECTORMASTER;
