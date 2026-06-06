"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TDSTRAN = void 0;
var typeorm_1 = require("typeorm");
var TDSTRAN = /** @class */ (function () {
    function TDSTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TDSTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], TDSTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], TDSTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], TDSTRAN.prototype, "FIN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], TDSTRAN.prototype, "AC_CUSTID");
    __decorate([
        (0, typeorm_1.Column)()
    ], TDSTRAN.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], TDSTRAN.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], TDSTRAN.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDSTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDSTRAN.prototype, "LAST_TDS_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], TDSTRAN.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], TDSTRAN.prototype, "TDS_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], TDSTRAN.prototype, "TDS_RATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], TDSTRAN.prototype, "IS_TDS_DEDUCTED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDSTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDSTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], TDSTRAN.prototype, "FINANCIAL_INTEREST");
    TDSTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], TDSTRAN);
    return TDSTRAN;
}());
exports.TDSTRAN = TDSTRAN;
