"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CRARTRAN = void 0;
var typeorm_1 = require("typeorm");
var CRARTRAN = /** @class */ (function () {
    function CRARTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CRARTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CRARTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CRARTRAN.prototype, "REPORT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CRARTRAN.prototype, "TRAN_CRARCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CRARTRAN.prototype, "TRAN_AMOUNT");
    CRARTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], CRARTRAN);
    return CRARTRAN;
}());
exports.CRARTRAN = CRARTRAN;
