"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PAIDDETAILS = void 0;
var typeorm_1 = require("typeorm");
var PAIDDETAILS = /** @class */ (function () {
    function PAIDDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PAIDDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAIDDETAILS.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAIDDETAILS.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAIDDETAILS.prototype, "SHORT_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAIDDETAILS.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAIDDETAILS.prototype, "GLACNO");
    PAIDDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], PAIDDETAILS);
    return PAIDDETAILS;
}());
exports.PAIDDETAILS = PAIDDETAILS;
