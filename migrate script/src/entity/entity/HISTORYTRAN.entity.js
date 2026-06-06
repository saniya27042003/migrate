"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HISTORYTRAN = void 0;
var typeorm_1 = require("typeorm");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var HISTORYTRAN = /** @class */ (function () {
    function HISTORYTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], HISTORYTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "BANK_ACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], HISTORYTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "AGENT_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "AGENT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "AGENT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "INTEREST_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "RECPAY_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "DD_COMMISSION_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYTRAN.prototype, "TOKEN_NO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYTRAN.prototype, "DD_PREPARED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "DIVIDEND_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], HISTORYTRAN.prototype, "DIVIDEND_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYTRAN.prototype, "NO_OF_SHARES");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "RECPAY_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "DD_COMMISSION_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "PENAL_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "OTHER1_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "OTHER2_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "OTHER3_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "OTHER4_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "OTHER5_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "OTHER6_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "OTHER7_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "OTHER8_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "OTHER9_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "OTHER10_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "OTHER1_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "OTHER2_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "OTHER3_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "OTHER4_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "OTHER5_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "OTHER6_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "OTHER7_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "OTHER8_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "OTHER9_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "OTHER10_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "PASSBOOK_PRINTED");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYTRAN.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "WITHDRAW_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "IS_INTEREST_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "PENAL_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "EXP_AMOUNT_FROM_PREPARATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "TRAN_SOURCE_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "TRAN_SOURCE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "CASH_REMITANCE_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "CASH_SEND_WITH_PERSON");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "DENO_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "CLOSING_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "HO_SUB_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "TRAN_PROCESS_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "TRAN_PROCESS_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "IS_DDPAYORDER_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "REC_PENAL_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "REC_PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "DIV_PAID_YEARS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "OD_INT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "TRANSFER_BRANCH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "IS_DORMANT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "NARR_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "OTHER11_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "OTHER11_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "SANCTIONED_CASH_LIMIT");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (HistoryTranType) { return HistoryTranType.historyTran; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "TRAN_ACTYPE" })
    ], HISTORYTRAN.prototype, "HistoryTranType");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (HistoryTran) { return HistoryTran.historyTran; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AGENT_ACTYPE" })
    ], HISTORYTRAN.prototype, "HistoryTran");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], HISTORYTRAN.prototype, "TRAN_BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], HISTORYTRAN.prototype, "SYSTRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "IBT_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "IBT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], HISTORYTRAN.prototype, "IBT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYTRAN.prototype, "TOTAL_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "ADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYTRAN.prototype, "APR_DATETIME");
    HISTORYTRAN = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Check)("\"TRAN_DRCR\" IN ('D', 'C')"),
        (0, typeorm_1.Check)("\"TRAN_TYPE\" IN ('CS', 'TR', 'JV', 'CL', 'IBT')"),
        (0, typeorm_1.Index)("NDXHISTORYTRAN", ["BRANCH_CODE", "TRAN_DATE", "TRAN_ACNOTYPE", "TRAN_ACTYPE", "TRAN_ACNO"]),
        (0, typeorm_1.Index)("NDXHISTORYTRAN1", ["BRANCH_CODE", "TRAN_DATE", "TRAN_NO", "SERIAL_NO"])
    ], HISTORYTRAN);
    return HISTORYTRAN;
}());
exports.HISTORYTRAN = HISTORYTRAN;
