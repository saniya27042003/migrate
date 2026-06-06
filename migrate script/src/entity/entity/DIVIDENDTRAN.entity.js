"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DIVIDENDTRAN = void 0;
var typeorm_1 = require("typeorm");
var DIVIDENDTRAN = /** @class */ (function () {
    function DIVIDENDTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DIVIDENDTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDENDTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVIDENDTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DIVIDENDTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVIDENDTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DIVIDENDTRAN.prototype, "DIVIDEND_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DIVIDENDTRAN.prototype, "KAYAM_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DIVIDENDTRAN.prototype, "MASHIK_DEPOSIT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DIVIDENDTRAN.prototype, "MASHIK_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DIVIDENDTRAN.prototype, "SEVAK_DED_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DIVIDENDTRAN.prototype, "JUSEVAK_DED_AMT");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], DIVIDENDTRAN.prototype, "BANK_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDENDTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDENDTRAN.prototype, "AC_SALARYDIV");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDENDTRAN.prototype, "SUB_SALARYDIV");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDENDTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDENDTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDENDTRAN.prototype, "POST_TO_AC");
    DIVIDENDTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], DIVIDENDTRAN);
    return DIVIDENDTRAN;
}());
exports.DIVIDENDTRAN = DIVIDENDTRAN;
