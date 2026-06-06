"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.COMMISSIONSLAB = void 0;
var typeorm_1 = require("typeorm");
var COMMISSIONSLAB = /** @class */ (function () {
    function COMMISSIONSLAB() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], COMMISSIONSLAB.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], COMMISSIONSLAB.prototype, "INSTRUMENT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], COMMISSIONSLAB.prototype, "EFFECTIVE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], COMMISSIONSLAB.prototype, "FROM_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], COMMISSIONSLAB.prototype, "TO_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], COMMISSIONSLAB.prototype, "RATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], COMMISSIONSLAB.prototype, "RATE_PER_UNIT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], COMMISSIONSLAB.prototype, "MIN_COMMISSION");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], COMMISSIONSLAB.prototype, "MAX_COMMISSION");
    COMMISSIONSLAB = __decorate([
        (0, typeorm_1.Entity)()
    ], COMMISSIONSLAB);
    return COMMISSIONSLAB;
}());
exports.COMMISSIONSLAB = COMMISSIONSLAB;
