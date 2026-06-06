"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CASHINTINSTRUCTIONS = void 0;
var typeorm_1 = require("typeorm");
var CASHINTINSTRUCTIONS = /** @class */ (function () {
    function CASHINTINSTRUCTIONS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CASHINTINSTRUCTIONS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CASHINTINSTRUCTIONS.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHINTINSTRUCTIONS.prototype, "INSTRUCTION_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CASHINTINSTRUCTIONS.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CASHINTINSTRUCTIONS.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CASHINTINSTRUCTIONS.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CASHINTINSTRUCTIONS.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CASHINTINSTRUCTIONS.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHINTINSTRUCTIONS.prototype, "MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHINTINSTRUCTIONS.prototype, "DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHINTINSTRUCTIONS.prototype, "PAID_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHINTINSTRUCTIONS.prototype, "PAID_VOUCHER_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHINTINSTRUCTIONS.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHINTINSTRUCTIONS.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CASHINTINSTRUCTIONS.prototype, "BRANCH_CODE");
    CASHINTINSTRUCTIONS = __decorate([
        (0, typeorm_1.Entity)()
    ], CASHINTINSTRUCTIONS);
    return CASHINTINSTRUCTIONS;
}());
exports.CASHINTINSTRUCTIONS = CASHINTINSTRUCTIONS;
