"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HISTORYREBITINTTRAN = void 0;
var typeorm_1 = require("typeorm");
var HISTORYREBITINTTRAN = /** @class */ (function () {
    function HISTORYREBITINTTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], HISTORYREBITINTTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYREBITINTTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYREBITINTTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYREBITINTTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYREBITINTTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYREBITINTTRAN.prototype, "PROCESS_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYREBITINTTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYREBITINTTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYREBITINTTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], HISTORYREBITINTTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYREBITINTTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYREBITINTTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYREBITINTTRAN.prototype, "REBIT_PAID_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYREBITINTTRAN.prototype, "REBIT_FROM_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYREBITINTTRAN.prototype, "REBIT_TO_YEAR");
    HISTORYREBITINTTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], HISTORYREBITINTTRAN);
    return HISTORYREBITINTTRAN;
}());
exports.HISTORYREBITINTTRAN = HISTORYREBITINTTRAN;
