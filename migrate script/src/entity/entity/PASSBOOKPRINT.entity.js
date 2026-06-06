"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PASSBOOKPRINT = void 0;
var typeorm_1 = require("typeorm");
var PASSBOOKPRINT = /** @class */ (function () {
    function PASSBOOKPRINT() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PASSBOOKPRINT.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "AC_OP_CD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "OP_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "WITHDRAW_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "DR_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "CR_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "OTHER_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKPRINT.prototype, "OTHER_DRCR");
    PASSBOOKPRINT = __decorate([
        (0, typeorm_1.Entity)()
    ], PASSBOOKPRINT);
    return PASSBOOKPRINT;
}());
exports.PASSBOOKPRINT = PASSBOOKPRINT;
