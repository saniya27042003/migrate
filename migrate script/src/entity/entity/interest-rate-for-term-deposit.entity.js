"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INTRATETD = void 0;
var interest_category_master_entity_1 = require("./interest-category-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var rate_for_term_entity_1 = require("./rate-for term.entity");
var INTRATETD = /** @class */ (function () {
    function INTRATETD() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INTRATETD.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTRATETD.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTRATETD.prototype, "TYPE");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return rate_for_term_entity_1.TERMINTRATE; }, function (rate) { return rate.idRate; }, {
            cascade: ["insert", "update"]
        })
    ], INTRATETD.prototype, "rate");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTRATETD.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (scheme) { return scheme.irftd; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "ACNOTYPE" })
    ], INTRATETD.prototype, "scheme");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTRATETD.prototype, "INT_CATEGORY");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return interest_category_master_entity_1.INTCATEGORYMASTER; }, function (category) { return category.idftd; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "INT_CATEGORY" })
    ], INTRATETD.prototype, "category");
    INTRATETD = __decorate([
        (0, typeorm_1.Entity)()
    ], INTRATETD);
    return INTRATETD;
}());
exports.INTRATETD = INTRATETD;
