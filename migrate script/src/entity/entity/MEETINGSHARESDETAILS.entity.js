"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MEETINGSHARESDETAILS = void 0;
var typeorm_1 = require("typeorm");
var MEETINGSHARESDETAILS = /** @class */ (function () {
    function MEETINGSHARESDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MEETINGSHARESDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGSHARESDETAILS.prototype, "MEETING_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGSHARESDETAILS.prototype, "MEETING_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGSHARESDETAILS.prototype, "SUB_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGSHARESDETAILS.prototype, "AC_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGSHARESDETAILS.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGSHARESDETAILS.prototype, "SHARESDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGSHARESDETAILS.prototype, "AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGSHARESDETAILS.prototype, "RESSOLUTION");
    MEETINGSHARESDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], MEETINGSHARESDETAILS);
    return MEETINGSHARESDETAILS;
}());
exports.MEETINGSHARESDETAILS = MEETINGSHARESDETAILS;
