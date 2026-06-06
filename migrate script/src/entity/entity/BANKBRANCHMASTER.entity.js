"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BANKBRANCHMASTER = void 0;
var bank_master_entity_1 = require("./bank-master.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var typeorm_1 = require("typeorm");
var BANKBRANCHMASTER = /** @class */ (function () {
    function BANKBRANCHMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BANKBRANCHMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKBRANCHMASTER.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKBRANCHMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKBRANCHMASTER.prototype, "HOLIDAYOPEN");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKBRANCHMASTER.prototype, "CLEARINGDAY");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKBRANCHMASTER.prototype, "HOLIDAY");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKBRANCHMASTER.prototype, "CLEARINGDAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKBRANCHMASTER.prototype, "PHONE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKBRANCHMASTER.prototype, "ADDRESS");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKBRANCHMASTER.prototype, "HALF_DAY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKBRANCHMASTER.prototype, "CLEARING_HOUSE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKBRANCHMASTER.prototype, "SBI_BANKCODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return bank_master_entity_1.BANKMASTER; }, function (BankCode) { return BankCode.BankCode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BANK_CODE" })
    ], BANKBRANCHMASTER.prototype, "BankCode");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BBranchMaster) { return BBranchMaster.BBranchMaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], BANKBRANCHMASTER.prototype, "BBranchMaster");
    BANKBRANCHMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], BANKBRANCHMASTER);
    return BANKBRANCHMASTER;
}());
exports.BANKBRANCHMASTER = BANKBRANCHMASTER;
