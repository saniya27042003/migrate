"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LNRQTRAN = void 0;
var typeorm_1 = require("typeorm");
var LNRQTRAN = /** @class */ (function () {
    function LNRQTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LNRQTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNRQTRAN.prototype, "APPLICATION_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNRQTRAN.prototype, "APPLICATION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "MEETING_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], LNRQTRAN.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_OLDACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_OLDACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], LNRQTRAN.prototype, "AC_OLDACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRAN.prototype, "REQUEST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_SALARY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_SALARYDEDUCTION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "RESON");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "APPLI_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_GURR1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_GURR2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRAN.prototype, "SANCTION_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRAN.prototype, "SHARE_DEDUCT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRAN.prototype, "EMRFUND_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRAN.prototype, "KAYAM_DEPO_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRAN.prototype, "AC_DRAWPOWER_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "APPLICATION_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "REQUEST_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "BASIC_DA");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], LNRQTRAN.prototype, "INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRAN.prototype, "SANCTION_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "SANSTHA_SHIFARAS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "OLD_LOAN_DUES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "OLD_SHARE_DEDS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRAN.prototype, "DEPOSIT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "OTHER_SANSTHA_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRAN.prototype, "OTHER_DEDS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_REGNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_GURR3");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_GURR4");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_SALARYDIVISION_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "SUB_SALARYDIVISION_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_SHGURR1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_SHGURR2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_SHGURR3");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_SHGURR4");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNRQTRAN.prototype, "AC_INSTALLMENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNRQTRAN.prototype, "AC_MONTHS");
    LNRQTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], LNRQTRAN);
    return LNRQTRAN;
}());
exports.LNRQTRAN = LNRQTRAN;
