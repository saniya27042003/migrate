"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FRIDAYLIQUIDITYMASTER = void 0;
var typeorm_1 = require("typeorm");
var FRIDAYLIQUIDITYMASTER = /** @class */ (function () {
    function FRIDAYLIQUIDITYMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], FRIDAYLIQUIDITYMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], FRIDAYLIQUIDITYMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], FRIDAYLIQUIDITYMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FSRNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "SSRNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "TSRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FRIDAYLIQUIDITYMASTER.prototype, "BALTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FRIDAYLIQUIDITYMASTER.prototype, "LAST_FRI_TOT_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FRIDAYLIQUIDITYMASTER.prototype, "LAST_FRI_DED_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FRI_TOT_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "PERCENTAGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FRIDAYLIQUIDITYMASTER.prototype, "PERCENTAGE_CONSIDARATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FRIDAYLIQUIDITYMASTER.prototype, "PERCENTAGE_OF_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "CALCULATE_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "CREDIT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "DEBIT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "LAST_FRIDAY_TOTAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FRIDAYLIQUIDITYMASTER.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FRIDAYLIQUIDITYMASTER.prototype, "CASH_ASSET_FLAG");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT1");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT2");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT3");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT4");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT5");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT6");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT7");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT8");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT9");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT10");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT11");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT12");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT13");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT14");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FRIDAYLIQUIDITYMASTER.prototype, "INPUT_ALLOWED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FRIDAYLIQUIDITYMASTER.prototype, "ALTERNATIVE_FRIDAY_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FRIDAYLIQUIDITYMASTER.prototype, "FINAL_AMOUNT15");
    FRIDAYLIQUIDITYMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], FRIDAYLIQUIDITYMASTER);
    return FRIDAYLIQUIDITYMASTER;
}());
exports.FRIDAYLIQUIDITYMASTER = FRIDAYLIQUIDITYMASTER;
