"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INTHISTORYTRAN = void 0;
var typeorm_1 = require("typeorm");
var INTHISTORYTRAN = /** @class */ (function () {
    function INTHISTORYTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INTHISTORYTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTHISTORYTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTHISTORYTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTHISTORYTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTHISTORYTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTHISTORYTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTHISTORYTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTHISTORYTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTHISTORYTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTHISTORYTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTHISTORYTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], INTHISTORYTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTHISTORYTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTHISTORYTRAN.prototype, "INTEREST_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTHISTORYTRAN.prototype, "RECPAY_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTHISTORYTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTHISTORYTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "RECPAY_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTHISTORYTRAN.prototype, "INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTHISTORYTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTHISTORYTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTHISTORYTRAN.prototype, "PENAL_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTHISTORYTRAN.prototype, "LAST_INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "INTEREST_RATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "TD_SCHEME_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "LEDGER_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "TOTAL_PRODUCTS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTHISTORYTRAN.prototype, "AC_OPEN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTHISTORYTRAN.prototype, "EXPIRY_DATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTHISTORYTRAN.prototype, "MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTHISTORYTRAN.prototype, "DAYS");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTHISTORYTRAN.prototype, "POST_TO_INDIVIDUAL_AC");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTHISTORYTRAN.prototype, "DAILYTRAN_POST_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "POST_PENALINT_IN_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTHISTORYTRAN.prototype, "ODUE_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "ODUE_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTHISTORYTRAN.prototype, "IS_POST_PENAL_TO_AC");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "RECPAY_INT_OPENING");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "ODUE_INT_OPENING");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "OD_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "REC_PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTHISTORYTRAN.prototype, "REC_PENAL_INT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTHISTORYTRAN.prototype, "RECPENAL_INT_OPENING");
    INTHISTORYTRAN = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Index)("NDXINTHISTORYTRAN", ["BRANCH_CODE", "TRAN_DATE", "TRAN_ACNOTYPE", "TRAN_ACTYPE", "TRAN_ACNO"]),
        (0, typeorm_1.Index)("NDXINTHISTORYTRAN1", ["BRANCH_CODE", "TRAN_DATE", "TRAN_NO", "SERIAL_NO"])
    ], INTHISTORYTRAN);
    return INTHISTORYTRAN;
}());
exports.INTHISTORYTRAN = INTHISTORYTRAN;
