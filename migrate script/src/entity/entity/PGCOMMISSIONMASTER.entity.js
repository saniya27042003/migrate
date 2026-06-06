"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PGCOMMISSIONMASTER = void 0;
var typeorm_1 = require("typeorm");
var PGCOMMISSIONMASTER = /** @class */ (function () {
    function PGCOMMISSIONMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PGCOMMISSIONMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], PGCOMMISSIONMASTER.prototype, "SR_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGCOMMISSIONMASTER.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGCOMMISSIONMASTER.prototype, "SLAB_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGCOMMISSIONMASTER.prototype, "AMOUNT_FROM");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGCOMMISSIONMASTER.prototype, "AMOUNT_TO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], PGCOMMISSIONMASTER.prototype, "PIGMY_COMMISSION_PERCENTAGE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGCOMMISSIONMASTER.prototype, "COMM_AGAINST_LN_PERCENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGCOMMISSIONMASTER.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGCOMMISSIONMASTER.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], PGCOMMISSIONMASTER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGCOMMISSIONMASTER.prototype, "PG_AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGCOMMISSIONMASTER.prototype, "PG_AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGCOMMISSIONMASTER.prototype, "PIGMY_SVR_CHARGE_RATE");
    PGCOMMISSIONMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], PGCOMMISSIONMASTER);
    return PGCOMMISSIONMASTER;
}());
exports.PGCOMMISSIONMASTER = PGCOMMISSIONMASTER;
