"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.USERDENOMINATION = void 0;
var typeorm_1 = require("typeorm");
var USERDENOMINATION = /** @class */ (function () {
    function USERDENOMINATION() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], USERDENOMINATION.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], USERDENOMINATION.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_2000");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_1000");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_500");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_100");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_200");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_50");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_20");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_10");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_5");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_2");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_1");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], USERDENOMINATION.prototype, "DENO_COINS_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], USERDENOMINATION.prototype, "TOTAL_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], USERDENOMINATION.prototype, "OPENING_CASH");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], USERDENOMINATION.prototype, "DEPOSITS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], USERDENOMINATION.prototype, "WITHDRAWAL");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], USERDENOMINATION.prototype, "BRANCH_CODE");
    USERDENOMINATION = __decorate([
        (0, typeorm_1.Entity)()
    ], USERDENOMINATION);
    return USERDENOMINATION;
}());
exports.USERDENOMINATION = USERDENOMINATION;
