"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CERTIFICATETRAN = void 0;
var typeorm_1 = require("typeorm");
var CERTIFICATETRAN = /** @class */ (function () {
    function CERTIFICATETRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CERTIFICATETRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CERTIFICATETRAN.prototype, "CERTIFICATE_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CERTIFICATETRAN.prototype, "MEMBER_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CERTIFICATETRAN.prototype, "NO_OF_SHARES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CERTIFICATETRAN.prototype, "SH_FROM_DISNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CERTIFICATETRAN.prototype, "SH_TO_DISNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CERTIFICATETRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CERTIFICATETRAN.prototype, "SH_FROM_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CERTIFICATETRAN.prototype, "SH_TO_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CERTIFICATETRAN.prototype, "AC_SALARYDIVISION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CERTIFICATETRAN.prototype, "USER_CODE");
    CERTIFICATETRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], CERTIFICATETRAN);
    return CERTIFICATETRAN;
}());
exports.CERTIFICATETRAN = CERTIFICATETRAN;
