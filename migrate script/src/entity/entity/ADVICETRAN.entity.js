"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ADVICETRAN = void 0;
var typeorm_1 = require("typeorm");
var ADVICETRAN = /** @class */ (function () {
    function ADVICETRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ADVICETRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "ADVICE_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "REG_SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "INSTRUMENT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ADVICETRAN.prototype, "INSTRUMENT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ADVICETRAN.prototype, "INSTRUMENT_SERIES");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "INSTRUMENT_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "ISSUEING_BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "PARTY_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "PARTY_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "PARTY_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ADVICETRAN.prototype, "BANEFICIERY_NAME");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ADVICETRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ADVICETRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ADVICETRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ADVICETRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ADVICETRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ADVICETRAN.prototype, "IS_CLEAR");
    ADVICETRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], ADVICETRAN);
    return ADVICETRAN;
}());
exports.ADVICETRAN = ADVICETRAN;
