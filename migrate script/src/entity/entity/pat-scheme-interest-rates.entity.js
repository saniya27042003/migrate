"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INTRATEPATSCHEMES = void 0;
var interest_category_master_entity_1 = require("../../../../../../../../src/entity/entity/interest-category-master.entity");
var schemeParameters_entity_1 = require("../../../../../../../../src/entity/entity/schemeParameters.entity");
var typeorm_1 = require("typeorm");
var interest_rate_entity_1 = require("./interest-rate.entity");
var INTRATEPATSCHEMES = /** @class */ (function () {
    function INTRATEPATSCHEMES() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INTRATEPATSCHEMES.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTRATEPATSCHEMES.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTRATEPATSCHEMES.prototype, "TYPE");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return interest_rate_entity_1.INTRATE; }, function (rate) { return rate.idRate; }, {
            cascade: ["insert", "update"]
        })
    ], INTRATEPATSCHEMES.prototype, "rate");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTRATEPATSCHEMES.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (scheme) { return scheme.patscheme; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], INTRATEPATSCHEMES.prototype, "scheme");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTRATEPATSCHEMES.prototype, "INT_CATEGORY");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return interest_category_master_entity_1.INTCATEGORYMASTER; }, function (category) { return category.patdeposit; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "INT_CATEGORY" })
    ], INTRATEPATSCHEMES.prototype, "category");
    INTRATEPATSCHEMES = __decorate([
        (0, typeorm_1.Entity)()
    ], INTRATEPATSCHEMES);
    return INTRATEPATSCHEMES;
}());
exports.INTRATEPATSCHEMES = INTRATEPATSCHEMES;
