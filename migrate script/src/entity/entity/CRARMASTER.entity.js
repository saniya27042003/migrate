"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CRARMASTER = void 0;
var typeorm_1 = require("typeorm");
var CRARMASTER = /** @class */ (function () {
    function CRARMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CRARMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], CRARMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CRARMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CRARMASTER.prototype, "SECOND_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CRARMASTER.prototype, "THIRD_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CRARMASTER.prototype, "FOURTH_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], CRARMASTER.prototype, "PERCENTAGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CRARMASTER.prototype, "HEAD_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], CRARMASTER.prototype, "IS_INPUT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CRARMASTER.prototype, "AMOUNT");
    CRARMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], CRARMASTER);
    return CRARMASTER;
}());
exports.CRARMASTER = CRARMASTER;
