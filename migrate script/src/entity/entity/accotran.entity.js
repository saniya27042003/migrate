"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ACCOTRAN = void 0;
var typeorm_1 = require("typeorm");
var ACCOTRAN = /** @class */ (function () {
    function ACCOTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ACCOTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACCOTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACCOTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACCOTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACCOTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACCOTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACCOTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACCOTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACCOTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACCOTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "TRAN_CONTRA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "CLOSING_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "WITHDRAW_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "STATEMENT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "OTHER1_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "OTHER2_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "OTHER3_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "OTHER4_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "OTHER5_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "OTHER6_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "OTHER7_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "OTHER8_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "OTHER9_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "OTHER10_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACCOTRAN.prototype, "OTHER11_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOTRAN.prototype, "TRAN_SOURCE_TYPE");
    ACCOTRAN = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Check)("\"TRAN_DRCR\" IN ('D', 'C')"),
        (0, typeorm_1.Index)("NDXACCOTRAN", ["BRANCH_CODE", "TRAN_DATE", "TRAN_ACNOTYPE", "TRAN_ACTYPE", "TRAN_ACNO"]),
        (0, typeorm_1.Index)("NDXACCOTRAN1", ["BRANCH_CODE", "TRAN_DATE", "TRAN_NO", "SERIAL_NO"])
    ], ACCOTRAN);
    return ACCOTRAN;
}());
exports.ACCOTRAN = ACCOTRAN;
