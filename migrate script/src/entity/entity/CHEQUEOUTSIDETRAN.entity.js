"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CHEQUEOUTSIDETRAN = void 0;
var typeorm_1 = require("typeorm");
var CHEQUEOUTSIDETRAN = /** @class */ (function () {
    function CHEQUEOUTSIDETRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CHEQUEOUTSIDETRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": true })
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "CLEARING_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "COLLECTION_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "COLLECTION_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "BANK_BRANCH_NAME");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "BANK_BRANCH_ADDRESS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHEQUEOUTSIDETRAN.prototype, "BILL_DISCOUNT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "BILL_DISCOUNT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHEQUEOUTSIDETRAN.prototype, "BILL_COMMISSION_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "BILL_USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "BILL_OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], CHEQUEOUTSIDETRAN.prototype, "BILL_TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEOUTSIDETRAN.prototype, "ENTRY_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "HO_SUB_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHEQUEOUTSIDETRAN.prototype, "COLLECTION_CHARGES");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHEQUEOUTSIDETRAN.prototype, "RECEIVED_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "RETURN_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "DRAWEE_BANK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "BANK_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEOUTSIDETRAN.prototype, "TRAN_CODE");
    CHEQUEOUTSIDETRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], CHEQUEOUTSIDETRAN);
    return CHEQUEOUTSIDETRAN;
}());
exports.CHEQUEOUTSIDETRAN = CHEQUEOUTSIDETRAN;
