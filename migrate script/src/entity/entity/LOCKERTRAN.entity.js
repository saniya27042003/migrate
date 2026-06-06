"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LOCKERTRAN = void 0;
var typeorm_1 = require("typeorm");
var LOCKERTRAN = /** @class */ (function () {
    function LOCKERTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LOCKERTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOCKERTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOCKERTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOCKERTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "LOCKER_OPENING_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "LOCKER_CLOSING_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "OPENING_USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "CLOSING_USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERTRAN.prototype, "BRANCH_CODE");
    LOCKERTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], LOCKERTRAN);
    return LOCKERTRAN;
}());
exports.LOCKERTRAN = LOCKERTRAN;
