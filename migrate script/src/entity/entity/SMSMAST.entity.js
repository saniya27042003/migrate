"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SMSMAST = void 0;
var typeorm_1 = require("typeorm");
var SMSMAST = /** @class */ (function () {
    function SMSMAST() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SMSMAST.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SMSMAST.prototype, "SMS_ID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SMSMAST.prototype, "TEMPLATE_ID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SMSMAST.prototype, "TEMPLATE_CONTENT");
    SMSMAST = __decorate([
        (0, typeorm_1.Entity)()
    ], SMSMAST);
    return SMSMAST;
}());
exports.SMSMAST = SMSMAST;
