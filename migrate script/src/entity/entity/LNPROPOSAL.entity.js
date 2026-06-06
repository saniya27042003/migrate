"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LNPROPOSAL = void 0;
var typeorm_1 = require("typeorm");
var LNPROPOSAL = /** @class */ (function () {
    function LNPROPOSAL() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LNPROPOSAL.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNPROPOSAL.prototype, "TRAN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNPROPOSAL.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNPROPOSAL.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNPROPOSAL.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNPROPOSAL.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNPROPOSAL.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_TITLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_SEXCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_MEMBTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_MEMBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_CUSTID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_OCODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNPROPOSAL.prototype, "AC_SANCTION_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_RESO_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_RESO_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_EXPIRE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_AUTHORITY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "AC_REPAYMODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "REJECT_REASON");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "SANCTION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "REJECT_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNPROPOSAL.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNPROPOSAL.prototype, "FORWARD_DATE");
    LNPROPOSAL = __decorate([
        (0, typeorm_1.Entity)()
    ], LNPROPOSAL);
    return LNPROPOSAL;
}());
exports.LNPROPOSAL = LNPROPOSAL;
