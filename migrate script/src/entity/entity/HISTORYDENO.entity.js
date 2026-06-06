"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HISTORYDENO = void 0;
var typeorm_1 = require("typeorm");
var HISTORYDENO = /** @class */ (function () {
    function HISTORYDENO() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], HISTORYDENO.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYDENO.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYDENO.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYDENO.prototype, "DENO_1000");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYDENO.prototype, "DENO_500");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYDENO.prototype, "DENO_100");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYDENO.prototype, "DENO_50");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYDENO.prototype, "DENO_20");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYDENO.prototype, "DENO_10");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYDENO.prototype, "DENO_5");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYDENO.prototype, "DENO_2");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYDENO.prototype, "DENO_1");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYDENO.prototype, "DENO_COINS_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYDENO.prototype, "TOTAL_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYDENO.prototype, "OPENING_CASH");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYDENO.prototype, "DEPOSITS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYDENO.prototype, "WITHDRAWAL");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYDENO.prototype, "DENO_2000");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], HISTORYDENO.prototype, "DENO_200");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDENO.prototype, "BRANCH_CODE");
    HISTORYDENO = __decorate([
        (0, typeorm_1.Entity)()
    ], HISTORYDENO);
    return HISTORYDENO;
}());
exports.HISTORYDENO = HISTORYDENO;
