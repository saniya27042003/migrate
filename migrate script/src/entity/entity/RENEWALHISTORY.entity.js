"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RENEWALHISTORY = void 0;
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var RENEWALHISTORY = /** @class */ (function () {
    function RENEWALHISTORY() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], RENEWALHISTORY.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "RENEWAL_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "AC_RENEWAL_COUNTER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], RENEWALHISTORY.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], RENEWALHISTORY.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_EXPIRY_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "OLD_SANCTION_LIMIT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_SANCTION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "OLD_SECURITY_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "OLD_DRAWING_POWER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "NEW_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "NEW_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "NEW_OPEN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "NEW_ASON_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "NEW_EXPIRY_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "NEW_INTEREST_RATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], RENEWALHISTORY.prototype, "OLD_AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], RENEWALHISTORY.prototype, "OLD_AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_AC_OPEN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "OLD_AC_SCHMAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "OLD_MATUAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "OLD_INTEREST_RATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], RENEWALHISTORY.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "OLD_AC_INSTALLMENT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "RENEWAL_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "NEW_RECEIPTNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "NEW_INT_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "NEW_MATURITY_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], RENEWALHISTORY.prototype, "OLD_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "OLD_AC_SCHEME_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_RECEIPT_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "PENAL_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "NORMAL_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "PAYABLE_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RENEWALHISTORY.prototype, "INTEREST_PAID_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "IS_ASON_AC");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "NORMAL_INT_TRTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "PAY_INT_TRTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "NORMAL_INT_TR_SCHEME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], RENEWALHISTORY.prototype, "NORMAL_INT_TR_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "PAY_INT_TR_SCHEME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], RENEWALHISTORY.prototype, "PAY_INT_TR_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "NEW_LAST_TRNDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_LAST_TRNDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_ASON_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_INT_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "NEW_INT_CATA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "OLD_INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "AC_RESO_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RENEWALHISTORY.prototype, "AC_RESO_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 1 })
    ], RENEWALHISTORY.prototype, "status");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (renewalHistory) { return renewalHistory.renewalHistory; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], RENEWALHISTORY.prototype, "renewalHistory");
    RENEWALHISTORY = __decorate([
        (0, typeorm_1.Entity)()
    ], RENEWALHISTORY);
    return RENEWALHISTORY;
}());
exports.RENEWALHISTORY = RENEWALHISTORY;
