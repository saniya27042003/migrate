"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RATIODATA = void 0;
var typeorm_1 = require("typeorm");
var RATIODATA = /** @class */ (function () {
    function RATIODATA() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], RATIODATA.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RATIODATA.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], RATIODATA.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RATIODATA.prototype, "RATIO_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RATIODATA.prototype, "AMOUNT1");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RATIODATA.prototype, "AMOUNT2");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], RATIODATA.prototype, "IS_PERCENTAGE");
    RATIODATA = __decorate([
        (0, typeorm_1.Entity)()
    ], RATIODATA);
    return RATIODATA;
}());
exports.RATIODATA = RATIODATA;
