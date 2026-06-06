"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EXCESSCASH = void 0;
var typeorm_1 = require("typeorm");
var EXCESSCASH = /** @class */ (function () {
    function EXCESSCASH() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], EXCESSCASH.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], EXCESSCASH.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], EXCESSCASH.prototype, "CASH_LIMIT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], EXCESSCASH.prototype, "CLOSING_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], EXCESSCASH.prototype, "EXCESS_CASH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], EXCESSCASH.prototype, "REASON");
    EXCESSCASH = __decorate([
        (0, typeorm_1.Entity)()
    ], EXCESSCASH);
    return EXCESSCASH;
}());
exports.EXCESSCASH = EXCESSCASH;
