"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PIGMYTRAN = void 0;
var typeorm_1 = require("typeorm");
var PIGMYTRAN = /** @class */ (function () {
    function PIGMYTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PIGMYTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "PENAL_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "TRAN_SOURCE_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], PIGMYTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "AGENT_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "AGENT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], PIGMYTRAN.prototype, "AGENT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], PIGMYTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "WITHDRAW_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "RECPAY_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], PIGMYTRAN.prototype, "IS_INTEREST_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "CHART_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "RECEIPT_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "EDIT_USER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "EDIT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "AUTO_VOUCHER_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "AUTO_VOUCHER_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYTRAN.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "OTHER1_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "OTHER2_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "OTHER3_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "OTHER4_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "OTHER5_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "OTHER6_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "OTHER7_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "OTHER8_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "OTHER9_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "OTHER10_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYTRAN.prototype, "OTHER11_AMOUNT");
    PIGMYTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], PIGMYTRAN);
    return PIGMYTRAN;
}());
exports.PIGMYTRAN = PIGMYTRAN;
