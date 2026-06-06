"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FORMIXMASTER = void 0;
var typeorm_1 = require("typeorm");
var FORMIXMASTER = /** @class */ (function () {
    function FORMIXMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], FORMIXMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FORMIXMASTER.prototype, "REPORT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FORMIXMASTER.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FORMIXMASTER.prototype, "OVERDUE_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FORMIXMASTER.prototype, "PRIORITY_AMOUNT");
    FORMIXMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], FORMIXMASTER);
    return FORMIXMASTER;
}());
exports.FORMIXMASTER = FORMIXMASTER;
