"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.REPORTTYPEMASTER = void 0;
var typeorm_1 = require("typeorm");
var REPORTTYPEMASTER = /** @class */ (function () {
    function REPORTTYPEMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], REPORTTYPEMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], REPORTTYPEMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 100 })
    ], REPORTTYPEMASTER.prototype, "NAME");
    REPORTTYPEMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], REPORTTYPEMASTER);
    return REPORTTYPEMASTER;
}());
exports.REPORTTYPEMASTER = REPORTTYPEMASTER;
