"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INTRATETDMULTI = void 0;
var interest_category_master_entity_1 = require("./interest-category-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var slab_int_entity_1 = require("./slab-int.entity");
var INTRATETDMULTI = /** @class */ (function () {
    function INTRATETDMULTI() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INTRATETDMULTI.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return slab_int_entity_1.INTMULTI; }, function (rate) { return rate.idRate; }, {
            cascade: ["insert", "update"]
        })
    ], INTRATETDMULTI.prototype, "rate");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTRATETDMULTI.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (scheme) { return scheme.depoint; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "ACNOTYPE" })
    ], INTRATETDMULTI.prototype, "scheme");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTRATETDMULTI.prototype, "INT_CATEGORY");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return interest_category_master_entity_1.INTCATEGORYMASTER; }, function (category) { return category.depointrate; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "INT_CATEGORY" })
    ], INTRATETDMULTI.prototype, "category");
    INTRATETDMULTI = __decorate([
        (0, typeorm_1.Entity)()
    ], INTRATETDMULTI);
    return INTRATETDMULTI;
}());
exports.INTRATETDMULTI = INTRATETDMULTI;
