"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DEPOTRAN = void 0;
var typeorm_1 = require("typeorm");
var DEPOTRAN = /** @class */ (function () {
    function DEPOTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DEPOTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOTRAN.prototype, "REF_ID");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], DEPOTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "TRAN_SOURCE_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "PENAL_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "PASSBOOK_PRINTED");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "RECPAY_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "OTHER1_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "OTHER2_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "OTHER3_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "OTHER4_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "OTHER5_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "OTHER6_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "OTHER7_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "OTHER8_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "OTHER9_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "OTHER10_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DEPOTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DEPOTRAN.prototype, "IS_INTEREST_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "WITHDRAW_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "ADDED_PENAL_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "TRAN_PROCESS_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOTRAN.prototype, "TRAN_PROCESS_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "REC_PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DEPOTRAN.prototype, "IS_DORMANT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOTRAN.prototype, "OTHER11_AMOUNT");
    DEPOTRAN = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Check)("\"TRAN_DRCR\" IN ('D', 'C')"),
        (0, typeorm_1.Check)("\"TRAN_TYPE\" IN ('CS', 'TR', 'JV', 'CL', 'IBT')"),
        (0, typeorm_1.Index)("NDXDEPOTRAN", ["BRANCH_CODE", "TRAN_DATE", "TRAN_ACNOTYPE", "TRAN_ACTYPE", "TRAN_ACNO"]),
        (0, typeorm_1.Index)("NDXDEPOTRAN1", ["BRANCH_CODE", "TRAN_DATE", "TRAN_NO", "SERIAL_NO"])
    ], DEPOTRAN);
    return DEPOTRAN;
}());
exports.DEPOTRAN = DEPOTRAN;
