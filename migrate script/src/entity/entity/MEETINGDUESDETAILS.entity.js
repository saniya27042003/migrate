"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MEETINGDUESDETAILS = void 0;
var typeorm_1 = require("typeorm");
var MEETINGDUESDETAILS = /** @class */ (function () {
    function MEETINGDUESDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MEETINGDUESDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGDUESDETAILS.prototype, "MEETING_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGDUESDETAILS.prototype, "MEETING_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDUESDETAILS.prototype, "SUB_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDUESDETAILS.prototype, "AC_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDUESDETAILS.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDUESDETAILS.prototype, "LOAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDUESDETAILS.prototype, "DUEDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDUESDETAILS.prototype, "LEDGERBALANCE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDUESDETAILS.prototype, "OVERDUEAMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDUESDETAILS.prototype, "SHARESAMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDUESDETAILS.prototype, "DEPOSITAMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDUESDETAILS.prototype, "RESSOLUTION");
    MEETINGDUESDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], MEETINGDUESDETAILS);
    return MEETINGDUESDETAILS;
}());
exports.MEETINGDUESDETAILS = MEETINGDUESDETAILS;
