"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MEMBERGURDETAILS = void 0;
var typeorm_1 = require("typeorm");
var MEMBERGURDETAILS = /** @class */ (function () {
    function MEMBERGURDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MEMBERGURDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEMBERGURDETAILS.prototype, "MEMBER_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEMBERGURDETAILS.prototype, "MEMBER_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEMBERGURDETAILS.prototype, "MEMBER_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEMBERGURDETAILS.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEMBERGURDETAILS.prototype, "LN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEMBERGURDETAILS.prototype, "LN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEMBERGURDETAILS.prototype, "LN_ACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEMBERGURDETAILS.prototype, "LN_ACNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEMBERGURDETAILS.prototype, "LN_SANCTIONAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEMBERGURDETAILS.prototype, "LN_OPDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEMBERGURDETAILS.prototype, "LN_EXPDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEMBERGURDETAILS.prototype, "GUR_NO1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEMBERGURDETAILS.prototype, "GUR_NO2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEMBERGURDETAILS.prototype, "LN_AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEMBERGURDETAILS.prototype, "LN_CLOSEDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEMBERGURDETAILS.prototype, "AC_BRANCH");
    MEMBERGURDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], MEMBERGURDETAILS);
    return MEMBERGURDETAILS;
}());
exports.MEMBERGURDETAILS = MEMBERGURDETAILS;
