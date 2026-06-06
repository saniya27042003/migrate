"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PREMATULESSRATE = void 0;
var schemeParameters_entity_1 = require("../../../../../../../../src/entity/entity/schemeParameters.entity");
var typeorm_1 = require("typeorm");
var pigmy_less_int_entity_1 = require("./pigmy-less-int.entity");
var PREMATULESSRATE = /** @class */ (function () {
    function PREMATULESSRATE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PREMATULESSRATE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], PREMATULESSRATE.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pigmy_less_int_entity_1.PREMATULESS; }, function (rate) { return rate.idRate; }, {
            cascade: ["insert", "update"]
        })
    ], PREMATULESSRATE.prototype, "rate");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PREMATULESSRATE.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (scheme) { return scheme.prepigmy; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_ACNOTYPE" })
    ], PREMATULESSRATE.prototype, "scheme");
    PREMATULESSRATE = __decorate([
        (0, typeorm_1.Entity)()
    ], PREMATULESSRATE);
    return PREMATULESSRATE;
}());
exports.PREMATULESSRATE = PREMATULESSRATE;
