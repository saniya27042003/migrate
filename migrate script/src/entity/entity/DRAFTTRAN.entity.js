"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DRAFTTRAN = void 0;
var typeorm_1 = require("typeorm");
var DRAFTTRAN = /** @class */ (function () {
    function DRAFTTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DRAFTTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], DRAFTTRAN.prototype, "DD_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DRAFTTRAN.prototype, "DD_TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTTRAN.prototype, "DD_TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTTRAN.prototype, "SOURCE_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DRAFTTRAN.prototype, "SOURCE_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DRAFTTRAN.prototype, "SOURCE_TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DRAFTTRAN.prototype, "SOURCE_TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTTRAN.prototype, "SOURCE_TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], DRAFTTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DRAFTTRAN.prototype, "SOURCE_TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DRAFTTRAN.prototype, "SOURCE_TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DRAFTTRAN.prototype, "SOURCE_TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTTRAN.prototype, "TRAN_POSTING_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DRAFTTRAN.prototype, "VOUCHER_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DRAFTTRAN.prototype, "BANKERS_COMMISSION_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DRAFTTRAN.prototype, "BANK_COMMISSION_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DRAFTTRAN.prototype, "OTHER_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTTRAN.prototype, "OTHER_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTTRAN.prototype, "PAYEE_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTTRAN.prototype, "OFFICER_CODE");
    DRAFTTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], DRAFTTRAN);
    return DRAFTTRAN;
}());
exports.DRAFTTRAN = DRAFTTRAN;
