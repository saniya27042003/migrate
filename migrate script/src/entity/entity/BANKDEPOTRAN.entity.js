"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BANKDEPOTRAN = void 0;
var typeorm_1 = require("typeorm");
var BANKDEPOTRAN = /** @class */ (function () {
    function BANKDEPOTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BANKDEPOTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKDEPOTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKDEPOTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKDEPOTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDEPOTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKDEPOTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKDEPOTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKDEPOTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKDEPOTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], BANKDEPOTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BANKDEPOTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BANKDEPOTRAN.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDEPOTRAN.prototype, "AC_LINTEDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDEPOTRAN.prototype, "CREDIT_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], BANKDEPOTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDEPOTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDEPOTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDEPOTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], BANKDEPOTRAN.prototype, "IS_CLOSING_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDEPOTRAN.prototype, "DEBIT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDEPOTRAN.prototype, "DEBIT_GLACNO");
    BANKDEPOTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], BANKDEPOTRAN);
    return BANKDEPOTRAN;
}());
exports.BANKDEPOTRAN = BANKDEPOTRAN;
