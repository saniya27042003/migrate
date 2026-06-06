"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DIVPAIDTRAN = void 0;
var typeorm_1 = require("typeorm");
var DIVPAIDTRAN = /** @class */ (function () {
    function DIVPAIDTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DIVPAIDTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVPAIDTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVPAIDTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVPAIDTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVPAIDTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVPAIDTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVPAIDTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "NO_OF_SHARES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "CERTIFICATE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "SHARES_FROM_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "SHARES_TO_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "FACE_VALUE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "TRANSFER_ACTYPE_FROM");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "TRANSFER_MEMBER_NO_FROM");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "TRANSFER_ACTYPE_TO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "TRANSFER_MEMBER_NO_TO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "SHARES_TRANSFER_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "SHARES_RETURN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "RESULATION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "RESULATION_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "AC_CLOSEDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "DIVIDEND_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "DIVIDEND_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVPAIDTRAN.prototype, "BONUS_AMOUNT");
    DIVPAIDTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], DIVPAIDTRAN);
    return DIVPAIDTRAN;
}());
exports.DIVPAIDTRAN = DIVPAIDTRAN;
