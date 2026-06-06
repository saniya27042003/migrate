"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INWARDCLGTRAN = void 0;
var typeorm_1 = require("typeorm");
var INWARDCLGTRAN = /** @class */ (function () {
    function INWARDCLGTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INWARDCLGTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], INWARDCLGTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], INWARDCLGTRAN.prototype, "TRAN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], INWARDCLGTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], INWARDCLGTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)()
    ], INWARDCLGTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], INWARDCLGTRAN.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], INWARDCLGTRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)()
    ], INWARDCLGTRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "REJECTION_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "REJECTION_CHARGES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "REJECTION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "DAILY_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "PAYORDER_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "PO_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "AUTO_CLG_TALLY_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INWARDCLGTRAN.prototype, "CLG_HO_CHARGES");
    INWARDCLGTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], INWARDCLGTRAN);
    return INWARDCLGTRAN;
}());
exports.INWARDCLGTRAN = INWARDCLGTRAN;
