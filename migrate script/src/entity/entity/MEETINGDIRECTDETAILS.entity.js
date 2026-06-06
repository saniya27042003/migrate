"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MEETINGDIRECTDETAILS = void 0;
var typeorm_1 = require("typeorm");
var MEETINGDIRECTDETAILS = /** @class */ (function () {
    function MEETINGDIRECTDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MEETINGDIRECTDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGDIRECTDETAILS.prototype, "MEETING_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGDIRECTDETAILS.prototype, "MEETING_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDIRECTDETAILS.prototype, "SUB_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDIRECTDETAILS.prototype, "DIR_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDIRECTDETAILS.prototype, "DIR_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDIRECTDETAILS.prototype, "DIR_DESIGNATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGDIRECTDETAILS.prototype, "PRESENTY");
    MEETINGDIRECTDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], MEETINGDIRECTDETAILS);
    return MEETINGDIRECTDETAILS;
}());
exports.MEETINGDIRECTDETAILS = MEETINGDIRECTDETAILS;
