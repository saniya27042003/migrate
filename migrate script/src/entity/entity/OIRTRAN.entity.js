"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OIRTRAN = void 0;
var typeorm_1 = require("typeorm");
var OIRTRAN = /** @class */ (function () {
    function OIRTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], OIRTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], OIRTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], OIRTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OIRTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], OIRTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], OIRTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], OIRTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], OIRTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], OIRTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], OIRTRAN.prototype, "OIR_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], OIRTRAN.prototype, "OVERDUE_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], OIRTRAN.prototype, "DUE_INSTALLMENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OIRTRAN.prototype, "NPA_DATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], OIRTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OIRTRAN.prototype, "USER_CODE");
    OIRTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], OIRTRAN);
    return OIRTRAN;
}());
exports.OIRTRAN = OIRTRAN;
