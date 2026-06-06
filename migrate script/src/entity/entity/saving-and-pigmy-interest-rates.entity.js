"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INTRATESBPG = void 0;
var interest_category_master_entity_1 = require("../../../../../../../../src/entity/entity/interest-category-master.entity");
var schemeParameters_entity_1 = require("../../../../../../../../src/entity/entity/schemeParameters.entity");
var typeorm_1 = require("typeorm");
var INTRATESBPG = /** @class */ (function () {
    function INTRATESBPG() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INTRATESBPG.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTRATESBPG.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTRATESBPG.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTRATESBPG.prototype, "TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (scheme) { return scheme.sapint; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "ACNOTYPE" })
    ], INTRATESBPG.prototype, "scheme");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTRATESBPG.prototype, "INT_CATEGORY");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return interest_category_master_entity_1.INTCATEGORYMASTER; }, function (category) { return category.sapintrate; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "INT_CATEGORY" })
    ], INTRATESBPG.prototype, "category");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTRATESBPG.prototype, "INT_RATE");
    INTRATESBPG = __decorate([
        (0, typeorm_1.Entity)()
    ], INTRATESBPG);
    return INTRATESBPG;
}());
exports.INTRATESBPG = INTRATESBPG;
