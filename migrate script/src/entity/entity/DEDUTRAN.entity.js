"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DEDUTRAN = void 0;
var typeorm_1 = require("typeorm");
var DEDUTRAN = /** @class */ (function () {
    function DEDUTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DEDUTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEDUTRAN.prototype, "MONTHYEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEDUTRAN.prototype, "EMP_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEDUTRAN.prototype, "PAY_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEDUTRAN.prototype, "BANK_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEDUTRAN.prototype, "S_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEDUTRAN.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEDUTRAN.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEDUTRAN.prototype, "TRAN_AMOUNT");
    DEDUTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], DEDUTRAN);
    return DEDUTRAN;
}());
exports.DEDUTRAN = DEDUTRAN;
