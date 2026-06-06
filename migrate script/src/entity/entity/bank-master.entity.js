"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BANKMASTER = void 0;
var AUTODDNO_entity_1 = require("./AUTODDNO.entity");
var BANKBRANCHMASTER_entity_1 = require("./BANKBRANCHMASTER.entity");
var BANKCOMMISSION_entity_1 = require("./BANKCOMMISSION.entity");
var typeorm_1 = require("typeorm");
var BANKMASTER = /** @class */ (function () {
    function BANKMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BANKMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], BANKMASTER.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], BANKMASTER.prototype, "BANK_NAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 25 })
    ], BANKMASTER.prototype, "BANK_SHORTNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKMASTER.prototype, "LEDGER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 3 })
    ], BANKMASTER.prototype, "BANKCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], BANKMASTER.prototype, "DD_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 6 })
    ], BANKMASTER.prototype, "GL_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 6 })
    ], BANKMASTER.prototype, "HO_SUB_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], BANKMASTER.prototype, "BANKERS_COMM_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], BANKMASTER.prototype, "RIGHT_TO_PREPARE_DD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], BANKMASTER.prototype, "PARTICIPATE_IN_CLEARING");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return AUTODDNO_entity_1.AUTODDNO; }, function (bankCode) { return bankCode.bankCode; }, {
            cascade: ["insert", "update"]
        })
    ], BANKMASTER.prototype, "bankCode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return BANKBRANCHMASTER_entity_1.BANKBRANCHMASTER; }, function (BankCode) { return BankCode.BankCode; }, {
            cascade: ["insert", "update"]
        })
    ], BANKMASTER.prototype, "BankCode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return BANKCOMMISSION_entity_1.BANKCOMMISSION; }, function (bankComm) { return bankComm.bankComm; }, {
            cascade: ["insert", "update"]
        })
    ], BANKMASTER.prototype, "bankComm");
    BANKMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], BANKMASTER);
    return BANKMASTER;
}());
exports.BANKMASTER = BANKMASTER;
