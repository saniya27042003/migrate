"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CHARGES = void 0;
var typeorm_1 = require("typeorm");
var charges_entity_1 = require("./charges.entity");
var CHARGES = /** @class */ (function () {
    function CHARGES() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CHARGES.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHARGES.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHARGES.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHARGES.prototype, "CHARGES_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHARGES.prototype, "CHARGES_GL_ACNO");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return charges_entity_1.CHARGESAMT; }, function (rate) { return rate.idRate; }, {
            cascade: ["insert", "update"]
        })
    ], CHARGES.prototype, "rate");
    CHARGES = __decorate([
        (0, typeorm_1.Entity)()
    ], CHARGES);
    return CHARGES;
}());
exports.CHARGES = CHARGES;
