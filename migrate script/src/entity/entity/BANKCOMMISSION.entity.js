"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BANKCOMMISSION = void 0;
var bank_master_entity_1 = require("./bank-master.entity");
var typeorm_1 = require("typeorm");
var BANKCOMMISSION = /** @class */ (function () {
    function BANKCOMMISSION() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BANKCOMMISSION.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKCOMMISSION.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKCOMMISSION.prototype, "EFFECTIVE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BANKCOMMISSION.prototype, "FROM_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BANKCOMMISSION.prototype, "TO_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BANKCOMMISSION.prototype, "RATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BANKCOMMISSION.prototype, "RATE_PER_UNIT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BANKCOMMISSION.prototype, "MIN_COMMISSION");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BANKCOMMISSION.prototype, "MAX_COMMISSION");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return bank_master_entity_1.BANKMASTER; }, function (bankComm) { return bankComm.bankComm; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BANK_CODE" })
    ], BANKCOMMISSION.prototype, "bankComm");
    BANKCOMMISSION = __decorate([
        (0, typeorm_1.Entity)()
    ], BANKCOMMISSION);
    return BANKCOMMISSION;
}());
exports.BANKCOMMISSION = BANKCOMMISSION;
