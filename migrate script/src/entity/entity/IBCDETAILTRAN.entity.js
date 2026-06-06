"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IBCDETAILTRAN = void 0;
var typeorm_1 = require("typeorm");
var IBCDETAILTRAN = /** @class */ (function () {
    function IBCDETAILTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], IBCDETAILTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCDETAILTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCDETAILTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCDETAILTRAN.prototype, "TRAN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCDETAILTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCDETAILTRAN.prototype, "AMT_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCDETAILTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCDETAILTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCDETAILTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCDETAILTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCDETAILTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCDETAILTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCDETAILTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCDETAILTRAN.prototype, "HEAD_DESCRIPTION");
    IBCDETAILTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], IBCDETAILTRAN);
    return IBCDETAILTRAN;
}());
exports.IBCDETAILTRAN = IBCDETAILTRAN;
