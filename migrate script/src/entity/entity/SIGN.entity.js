"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SIGN = void 0;
var typeorm_1 = require("typeorm");
var SIGN = /** @class */ (function () {
    function SIGN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SIGN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SIGN.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SIGN.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SIGN.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SIGN.prototype, "SIGN1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SIGN.prototype, "SIGN2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SIGN.prototype, "SIGN3");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SIGN.prototype, "SIGN4");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SIGN.prototype, "PHOTO");
    SIGN = __decorate([
        (0, typeorm_1.Entity)()
    ], SIGN);
    return SIGN;
}());
exports.SIGN = SIGN;
