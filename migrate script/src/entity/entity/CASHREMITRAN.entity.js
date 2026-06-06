"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CASHREMITRAN = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var typeorm_1 = require("typeorm");
var CASHREMITRAN = /** @class */ (function () {
    function CASHREMITRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CASHREMITRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CASHREMITRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CASHREMITRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHREMITRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], CASHREMITRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CASHREMITRAN.prototype, "VOUCHER_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHREMITRAN.prototype, "CASH_REMITED_TO_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHREMITRAN.prototype, "CASH_SEND_WITH_PERSON");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHREMITRAN.prototype, "CASH_ACCEPT_BY_PERSON");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], CASHREMITRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHREMITRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CASHREMITRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHREMITRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHREMITRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHREMITRAN.prototype, "HO_SUB_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHREMITRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (cashTran) { return cashTran.cashTran; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], CASHREMITRAN.prototype, "cashTran");
    CASHREMITRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], CASHREMITRAN);
    return CASHREMITRAN;
}());
exports.CASHREMITRAN = CASHREMITRAN;
