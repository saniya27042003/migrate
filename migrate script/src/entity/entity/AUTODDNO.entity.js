"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AUTODDNO = void 0;
var bank_master_entity_1 = require("./bank-master.entity");
var typeorm_1 = require("typeorm");
var AUTODDNO = /** @class */ (function () {
    function AUTODDNO() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], AUTODDNO.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], AUTODDNO.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], AUTODDNO.prototype, "DRAFT_NO");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return bank_master_entity_1.BANKMASTER; }, function (bankCode) { return bankCode.bankCode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BANK_CODE" })
    ], AUTODDNO.prototype, "bankCode");
    AUTODDNO = __decorate([
        (0, typeorm_1.Entity)()
    ], AUTODDNO);
    return AUTODDNO;
}());
exports.AUTODDNO = AUTODDNO;
