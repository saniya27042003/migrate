"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.REBITINTTRAN = void 0;
var typeorm_1 = require("typeorm");
var REBITINTTRAN = /** @class */ (function () {
    function REBITINTTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], REBITINTTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], REBITINTTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], REBITINTTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], REBITINTTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], REBITINTTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], REBITINTTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], REBITINTTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], REBITINTTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, "default": 0 })
    ], REBITINTTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], REBITINTTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], REBITINTTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], REBITINTTRAN.prototype, "REBIT_PAID_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], REBITINTTRAN.prototype, "REBIT_FROM_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], REBITINTTRAN.prototype, "REBIT_TO_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], REBITINTTRAN.prototype, "PROCESS_DATE");
    REBITINTTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], REBITINTTRAN);
    return REBITINTTRAN;
}());
exports.REBITINTTRAN = REBITINTTRAN;
