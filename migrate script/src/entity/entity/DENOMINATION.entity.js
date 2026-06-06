"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DENOMINATION = void 0;
var typeorm_1 = require("typeorm");
var DENOMINATION = /** @class */ (function () {
    function DENOMINATION() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DENOMINATION.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], DENOMINATION.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DENOMINATION.prototype, "DENO_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "TOKEN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DENOMINATION.prototype, "CREDIT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DENOMINATION.prototype, "DEBIT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "DENO_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_1000");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_500");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_100");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_50");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_20");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_10");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_5");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_COINS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "PAYMENT_1000");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "PAYMENT_500");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "PAYMENT_100");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "PAYMENT_50");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "PAYMENT_20");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "PAYMENT_10");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "PAYMENT_5");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "PAYMENT_2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "PAYMENT_1");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DENOMINATION.prototype, "PAYMENT_COINS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_2000");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "PAYMENT_2000");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "ACCEPT_200");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "PAYMENT_200");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DENOMINATION.prototype, "BRANCH_CODE");
    DENOMINATION = __decorate([
        (0, typeorm_1.Entity)()
    ], DENOMINATION);
    return DENOMINATION;
}());
exports.DENOMINATION = DENOMINATION;
