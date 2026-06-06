"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LOANTRAN = void 0;
var typeorm_1 = require("typeorm");
var LOANTRAN = /** @class */ (function () {
    function LOANTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LOANTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOANTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOANTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOANTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOANTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOANTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOANTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOANTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOANTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOANTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], LOANTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "TRAN_SOURCE_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "PASSBOOK_PRINTED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "NORMAL_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "PENAL_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "RECPAY_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "INTEREST_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "OTHER1_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "OTHER2_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "OTHER3_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "OTHER4_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "OTHER5_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "OTHER6_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "OTHER7_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "OTHER8_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "OTHER9_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "OTHER10_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], LOANTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "IS_INTEREST_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "WITHDRAW_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "ADDED_PENAL_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "TRAN_PROCESS_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOANTRAN.prototype, "TRAN_PROCESS_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "REC_PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LOANTRAN.prototype, "OTHER11_AMOUNT");
    LOANTRAN = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Check)("\"TRAN_DRCR\" IN ('D', 'C')"),
        (0, typeorm_1.Check)("\"TRAN_TYPE\" IN ('CS', 'TR', 'JV', 'CL', 'IBT')"),
        (0, typeorm_1.Index)("NDXLOANTRAN", ["BRANCH_CODE", "TRAN_DATE", "TRAN_ACNOTYPE", "TRAN_ACTYPE", "TRAN_ACNO"]),
        (0, typeorm_1.Index)("NDXLOANTRAN1", ["BRANCH_CODE", "TRAN_DATE", "TRAN_NO", "SERIAL_NO"])
    ], LOANTRAN);
    return LOANTRAN;
}());
exports.LOANTRAN = LOANTRAN;
