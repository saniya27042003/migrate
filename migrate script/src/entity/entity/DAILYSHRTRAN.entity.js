"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DAILYSHRTRAN = void 0;
var typeorm_1 = require("typeorm");
var DAILYSHRTRAN = /** @class */ (function () {
    function DAILYSHRTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DAILYSHRTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYSHRTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYSHRTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYSHRTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYSHRTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYSHRTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYSHRTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "NO_OF_SHARES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "CERTIFICATE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "SHARES_FROM_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "SHARES_TO_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYSHRTRAN.prototype, "FACE_VALUE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRANSFER_ACTYPE_FROM");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRANSFER_MEMBER_NO_FROM");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRANSFER_ACTYPE_TO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRANSFER_MEMBER_NO_TO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "SHARES_TRANSFER_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "SHARES_RETURN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "RESULATION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "RESULATION_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "AC_CLOSEDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "IS_AUTO_TRF_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "TRAN_SOURCE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYSHRTRAN.prototype, "SH_CERTIFICATE_PRINTED");
    DAILYSHRTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], DAILYSHRTRAN);
    return DAILYSHRTRAN;
}());
exports.DAILYSHRTRAN = DAILYSHRTRAN;
