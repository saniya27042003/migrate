"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SIZEWISEBALANCE = void 0;
var typeorm_1 = require("typeorm");
var SIZEWISEBALANCE = /** @class */ (function () {
    function SIZEWISEBALANCE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SIZEWISEBALANCE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SIZEWISEBALANCE.prototype, "SR_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SIZEWISEBALANCE.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SIZEWISEBALANCE.prototype, "SLAB_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SIZEWISEBALANCE.prototype, "AMOUNT_FROM");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SIZEWISEBALANCE.prototype, "AMOUNT_TO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SIZEWISEBALANCE.prototype, "UNIT_OF_PERIOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SIZEWISEBALANCE.prototype, "FROM_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SIZEWISEBALANCE.prototype, "FROM_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SIZEWISEBALANCE.prototype, "TO_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SIZEWISEBALANCE.prototype, "TO_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], SIZEWISEBALANCE.prototype, "DEDUCTION_PERCENT");
    SIZEWISEBALANCE = __decorate([
        (0, typeorm_1.Entity)()
    ], SIZEWISEBALANCE);
    return SIZEWISEBALANCE;
}());
exports.SIZEWISEBALANCE = SIZEWISEBALANCE;
