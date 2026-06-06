"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DAILYWEBTRAN = void 0;
var typeorm_1 = require("typeorm");
var DAILYWEBTRAN = /** @class */ (function () {
    function DAILYWEBTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DAILYWEBTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYWEBTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYWEBTRAN.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "CHART_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], DAILYWEBTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "AGENT_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "AGENT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], DAILYWEBTRAN.prototype, "AGENT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], DAILYWEBTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DAILYWEBTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "RECEIPT_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAILYWEBTRAN.prototype, "OFFICER_CODE");
    DAILYWEBTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], DAILYWEBTRAN);
    return DAILYWEBTRAN;
}());
exports.DAILYWEBTRAN = DAILYWEBTRAN;
