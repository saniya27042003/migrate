"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MEETINGLOANDETAILS = void 0;
var typeorm_1 = require("typeorm");
var MEETINGLOANDETAILS = /** @class */ (function () {
    function MEETINGLOANDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MEETINGLOANDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGLOANDETAILS.prototype, "MEETING_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGLOANDETAILS.prototype, "MEETING_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGLOANDETAILS.prototype, "SUB_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGLOANDETAILS.prototype, "AC_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGLOANDETAILS.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGLOANDETAILS.prototype, "LOANDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGLOANDETAILS.prototype, "REF_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGLOANDETAILS.prototype, "LOAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGLOANDETAILS.prototype, "DEMAND_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGLOANDETAILS.prototype, "RESSOLUTION");
    MEETINGLOANDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], MEETINGLOANDETAILS);
    return MEETINGLOANDETAILS;
}());
exports.MEETINGLOANDETAILS = MEETINGLOANDETAILS;
