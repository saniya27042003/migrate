"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PAYORDERTRAN = void 0;
var typeorm_1 = require("typeorm");
var PAYORDERTRAN = /** @class */ (function () {
    function PAYORDERTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PAYORDERTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], PAYORDERTRAN.prototype, "PO_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], PAYORDERTRAN.prototype, "PO_TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "PO_TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "SOURCE_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PAYORDERTRAN.prototype, "SOURCE_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], PAYORDERTRAN.prototype, "SOURCE_TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PAYORDERTRAN.prototype, "SOURCE_TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "SOURCE_TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], PAYORDERTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PAYORDERTRAN.prototype, "SOURCE_TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PAYORDERTRAN.prototype, "SOURCE_TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PAYORDERTRAN.prototype, "SOURCE_TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "PURCHASER_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "PURCHASER_ADDRESS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "CITY_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "VOUCHER_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "BANK_COMMISSION_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "OTHER_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "OTHER_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERTRAN.prototype, "REJECT_OFFICER_CODE");
    PAYORDERTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], PAYORDERTRAN);
    return PAYORDERTRAN;
}());
exports.PAYORDERTRAN = PAYORDERTRAN;
