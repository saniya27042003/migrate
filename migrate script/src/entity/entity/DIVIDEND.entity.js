"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DIVIDEND = void 0;
var typeorm_1 = require("typeorm");
var DIVIDEND = /** @class */ (function () {
    function DIVIDEND() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DIVIDEND.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "WARRENT_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVIDEND.prototype, "WARRENT_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVIDEND.prototype, "DIV_FROM_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVIDEND.prototype, "DIV_TO_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "DIV_FROM_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "DIV_TO_MONTH");
    __decorate([
        (0, typeorm_1.Column)()
    ], DIVIDEND.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DIVIDEND.prototype, "ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], DIVIDEND.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "TOTAL_SHARES");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DIVIDEND.prototype, "TOTAL_SHARES_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DIVIDEND.prototype, "DIVIDEND_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "DIVIDEND_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "DIV_PAID_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "DIV_TRANSFER_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "DIV_TRANSFER_BRANCH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "DIV_TRANSFER_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "DIV_TRANSFER_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], DIVIDEND.prototype, "DIV_TRANSFER_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "MEMBER_CLOSE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DIVIDEND.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DIVIDEND.prototype, "BONUS_AMOUNT");
    DIVIDEND = __decorate([
        (0, typeorm_1.Entity)()
    ], DIVIDEND);
    return DIVIDEND;
}());
exports.DIVIDEND = DIVIDEND;
