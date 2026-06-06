"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LNRQTRANDETAILS = void 0;
var typeorm_1 = require("typeorm");
var LNRQTRANDETAILS = /** @class */ (function () {
    function LNRQTRANDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LNRQTRANDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNRQTRANDETAILS.prototype, "TRAN_APPLI_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNRQTRANDETAILS.prototype, "TRAN_APPLI_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNRQTRANDETAILS.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNRQTRANDETAILS.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNRQTRANDETAILS.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNRQTRANDETAILS.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], LNRQTRANDETAILS.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], LNRQTRANDETAILS.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], LNRQTRANDETAILS.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], LNRQTRANDETAILS.prototype, "INTEREST_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], LNRQTRANDETAILS.prototype, "RECPAY_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "CHEQUE_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], LNRQTRANDETAILS.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRANDETAILS.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRANDETAILS.prototype, "RECPAY_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRANDETAILS.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "PENAL_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRANDETAILS.prototype, "PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "REC_PENAL_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRANDETAILS.prototype, "REC_PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRANDETAILS.prototype, "SANCTION_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "IS_INTEREST_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "TRAN_SOURCE_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "TRAN_SOURCE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "CLOSING_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRANDETAILS.prototype, "TRAN_APPLI_YEAR");
    LNRQTRANDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], LNRQTRANDETAILS);
    return LNRQTRANDETAILS;
}());
exports.LNRQTRANDETAILS = LNRQTRANDETAILS;
