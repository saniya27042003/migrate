"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BANKGUARANTEETRAN = void 0;
var typeorm_1 = require("typeorm");
var BANKGUARANTEETRAN = /** @class */ (function () {
    function BANKGUARANTEETRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BANKGUARANTEETRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKGUARANTEETRAN.prototype, "ID_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKGUARANTEETRAN.prototype, "BG_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKGUARANTEETRAN.prototype, "BANEFICIERY_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "ADDR1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "ADDR2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "ADDR3");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "CITY_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "PIN_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "PHONE_OFFICE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "PHONE_RES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "ISSUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "BG_REF_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BANKGUARANTEETRAN.prototype, "BG_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "EXPIRE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BANKGUARANTEETRAN.prototype, "SECURITY_AMT");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKGUARANTEETRAN.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKGUARANTEETRAN.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKGUARANTEETRAN.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "PURPOSE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "SECURITY_DETAILS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "CLOSE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "RENEWAL_COUNTER");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], BANKGUARANTEETRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)()
    ], BANKGUARANTEETRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "CLOSE_OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKGUARANTEETRAN.prototype, "CITY_NAME");
    BANKGUARANTEETRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], BANKGUARANTEETRAN);
    return BANKGUARANTEETRAN;
}());
exports.BANKGUARANTEETRAN = BANKGUARANTEETRAN;
