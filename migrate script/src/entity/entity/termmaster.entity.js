"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TERMMASTER = void 0;
var typeorm_1 = require("typeorm");
var TERMMASTER = /** @class */ (function () {
    function TERMMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TERMMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TERMMASTER.prototype, "SR_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TERMMASTER.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TERMMASTER.prototype, "TERM_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], TERMMASTER.prototype, "PERIOD_FROM");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], TERMMASTER.prototype, "PERIOD_TO");
    TERMMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], TERMMASTER);
    return TERMMASTER;
}());
exports.TERMMASTER = TERMMASTER;
