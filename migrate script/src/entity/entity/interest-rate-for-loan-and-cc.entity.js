"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INTRATELOAN = void 0;
var interest_category_master_entity_1 = require("./interest-category-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var loan_and_cc_entity_1 = require("./loan-and-cc.entity");
var INTRATELOAN = /** @class */ (function () {
    function INTRATELOAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INTRATELOAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTRATELOAN.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTRATELOAN.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (scheme) { return scheme.id; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "ACNOTYPE" })
    ], INTRATELOAN.prototype, "scheme");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTRATELOAN.prototype, "INT_CATEGORY");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return interest_category_master_entity_1.INTCATEGORYMASTER; }, function (category) { return category.loanandcc; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "INT_CATEGORY" })
    ], INTRATELOAN.prototype, "category");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return loan_and_cc_entity_1.LNCCLOAN; }, function (rate) { return rate.idRate; })
    ], INTRATELOAN.prototype, "rate");
    INTRATELOAN = __decorate([
        (0, typeorm_1.Entity)()
    ], INTRATELOAN);
    return INTRATELOAN;
}());
exports.INTRATELOAN = INTRATELOAN;
