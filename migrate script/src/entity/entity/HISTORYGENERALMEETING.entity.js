"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HISTORYGENERALMEETING = void 0;
var typeorm_1 = require("typeorm");
var HISTORYGENERALMEETING = /** @class */ (function () {
    function HISTORYGENERALMEETING() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], HISTORYGENERALMEETING.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYGENERALMEETING.prototype, "MEETING_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYGENERALMEETING.prototype, "MEETING_FROM_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYGENERALMEETING.prototype, "MEETING_TO_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYGENERALMEETING.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYGENERALMEETING.prototype, "ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], HISTORYGENERALMEETING.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYGENERALMEETING.prototype, "MEETING_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYGENERALMEETING.prototype, "MEMBER_CLOSE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYGENERALMEETING.prototype, "AC_SALARYDIVISION_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYGENERALMEETING.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYGENERALMEETING.prototype, "OFFICER_CODE");
    HISTORYGENERALMEETING = __decorate([
        (0, typeorm_1.Entity)()
    ], HISTORYGENERALMEETING);
    return HISTORYGENERALMEETING;
}());
exports.HISTORYGENERALMEETING = HISTORYGENERALMEETING;
