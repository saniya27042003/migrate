"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DAILYTRAN = void 0;
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var DAILYTRAN = /** @class */ (function () {
    function DAILYTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DAILYTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], DAILYTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 'AG' })
    ], DAILYTRAN.prototype, "AGENT_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "AGENT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], DAILYTRAN.prototype, "AGENT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "INTEREST_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DAILYTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DAILYTRAN.prototype, "TOKEN_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "WITHDRAW_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], DAILYTRAN.prototype, "BANK_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DAILYTRAN.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "CASH_REMITANCE_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "CASH_SEND_WITH_PERSON");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "TRAN_SOURCE_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "TRAN_SOURCE_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "RECPAY_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "DD_COMMISSION_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "DD_COMMISSION_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OTHER1_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OTHER2_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OTHER3_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OTHER4_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OTHER5_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OTHER6_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OTHER7_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OTHER8_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OTHER9_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OTHER10_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "OTHER1_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "OTHER2_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "OTHER3_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "OTHER4_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "OTHER5_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "OTHER6_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "OTHER7_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "OTHER8_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "OTHER9_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "OTHER10_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "PENAL_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "RECPAY_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], DAILYTRAN.prototype, "IS_INTEREST_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "OTHER11_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OTHER11_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "REC_PENAL_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "REC_PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "DIVIDEND_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "TRANSFER_BRANCH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "DIV_PAID_YEARS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "TRAN_PROCESS_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "TRAN_PROCESS_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], DAILYTRAN.prototype, "DIVIDEND_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "OD_INT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DAILYTRAN.prototype, "HO_SUB_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DAILYTRAN.prototype, "NO_OF_SHARES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "DENO_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], DAILYTRAN.prototype, "TRAN_BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], DAILYTRAN.prototype, "SYSTRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "IBT_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "IBT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], DAILYTRAN.prototype, "IBT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYTRAN.prototype, "TOTAL_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "ADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYTRAN.prototype, "APR_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DAILYTRAN.prototype, "SENDSMS");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (dailytranschemes) { return dailytranschemes.dailytranscheme; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "TRAN_ACTYPE" })
    ], DAILYTRAN.prototype, "dailytranschemes");
    DAILYTRAN = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Check)("\"TRAN_DRCR\" IN ('D', 'C')"),
        (0, typeorm_1.Check)("\"TRAN_TYPE\" IN ('CS', 'TR', 'JV', 'CL', 'IBT')"),
        (0, typeorm_1.Index)("NDXDAILYTRAN", ["BRANCH_CODE", "TRAN_DATE", "TRAN_ACNOTYPE", "TRAN_ACTYPE", "TRAN_ACNO"]),
        (0, typeorm_1.Index)("NDXDAILYTRAN1", ["BRANCH_CODE", "TRAN_DATE", "TRAN_NO", "SERIAL_NO"])
    ], DAILYTRAN);
    return DAILYTRAN;
}());
exports.DAILYTRAN = DAILYTRAN;
