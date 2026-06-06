"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CLEARINGHOUSEMASTER = void 0;
var typeorm_1 = require("typeorm");
var CLEARINGHOUSEMASTER = /** @class */ (function () {
    function CLEARINGHOUSEMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CLEARINGHOUSEMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], CLEARINGHOUSEMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CLEARINGHOUSEMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)()
    ], CLEARINGHOUSEMASTER.prototype, "GL_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CLEARINGHOUSEMASTER.prototype, "CLEARING_HOUSE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CLEARINGHOUSEMASTER.prototype, "HO_SUB_GLACNO");
    CLEARINGHOUSEMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], CLEARINGHOUSEMASTER);
    return CLEARINGHOUSEMASTER;
}());
exports.CLEARINGHOUSEMASTER = CLEARINGHOUSEMASTER;
