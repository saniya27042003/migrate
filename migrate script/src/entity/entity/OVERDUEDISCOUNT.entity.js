"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OVERDUEDISCOUNT = void 0;
var typeorm_1 = require("typeorm");
var OVERDUEDISCOUNT = /** @class */ (function () {
    function OVERDUEDISCOUNT() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], OVERDUEDISCOUNT.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], OVERDUEDISCOUNT.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], OVERDUEDISCOUNT.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], OVERDUEDISCOUNT.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], OVERDUEDISCOUNT.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OVERDUEDISCOUNT.prototype, "DISCOUNT_MONTHS");
    OVERDUEDISCOUNT = __decorate([
        (0, typeorm_1.Entity)()
    ], OVERDUEDISCOUNT);
    return OVERDUEDISCOUNT;
}());
exports.OVERDUEDISCOUNT = OVERDUEDISCOUNT;
