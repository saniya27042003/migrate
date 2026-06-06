"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SHARETRAN = void 0;
var typeorm_1 = require("typeorm");
var SHARETRAN = /** @class */ (function () {
    function SHARETRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SHARETRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARETRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARETRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARETRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARETRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARETRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARETRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SHARETRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARETRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], SHARETRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SHARETRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "NO_OF_SHARES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "CERTIFICATE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "SHARES_FROM_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "SHARES_TO_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "FACE_VALUE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "TRAN_SOURCE_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "TRANSFER_ACTYPE_FROM");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], SHARETRAN.prototype, "TRANSFER_MEMBER_NO_FROM");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "TRANSFER_ACTYPE_TO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], SHARETRAN.prototype, "TRANSFER_MEMBER_NO_TO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "SHARES_TRANSFER_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "SHARES_RETURN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "RESULATION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "RESULATION_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "AC_CLOSEDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "DIVIDEND_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], SHARETRAN.prototype, "DIVIDEND_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SHARETRAN.prototype, "OTHER1_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SHARETRAN.prototype, "OTHER2_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "SH_CERTIFICATE_PRINTED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARETRAN.prototype, "NEW_DATE");
    SHARETRAN = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Check)("\"TRAN_DRCR\" IN ('D', 'C')"),
        (0, typeorm_1.Check)("\"TRAN_TYPE\" IN ('CS', 'TR', 'JV','IS','RN','CN', 'IBT')"),
        (0, typeorm_1.Index)("NDXSHARETRAN", ["BRANCH_CODE", "TRAN_DATE", "TRAN_ACNOTYPE", "TRAN_ACTYPE", "TRAN_ACNO"]),
        (0, typeorm_1.Index)("NDXSHARETRAN1", ["BRANCH_CODE", "TRAN_DATE", "TRAN_NO", "SERIAL_NO"])
    ], SHARETRAN);
    return SHARETRAN;
}());
exports.SHARETRAN = SHARETRAN;
