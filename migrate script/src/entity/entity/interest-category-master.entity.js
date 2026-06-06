"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INTCATEGORYMASTER = void 0;
var deposit_intrest_rate_entity_1 = require("./deposit-intrest-rate.entity");
var interest_rate_for_loan_and_cc_entity_1 = require("./interest-rate-for-loan-and-cc.entity");
var interest_rate_for_term_deposit_entity_1 = require("./interest-rate-for-term-deposit.entity");
var pat_scheme_interest_rates_entity_1 = require("./pat-scheme-interest-rates.entity");
var saving_and_pigmy_interest_rates_entity_1 = require("./saving-and-pigmy-interest-rates.entity");
var typeorm_1 = require("typeorm");
var dpmaster_entity_1 = require("./dpmaster.entity");
var INTCATEGORYMASTER = /** @class */ (function () {
    function INTCATEGORYMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INTCATEGORYMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], INTCATEGORYMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], INTCATEGORYMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTCATEGORYMASTER.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return dpmaster_entity_1.DPMASTER; }, function (interestCategory) { return interestCategory.intCategory; }, {
            cascade: ["insert", "update"]
        })
    ], INTCATEGORYMASTER.prototype, "interestCategory");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return interest_rate_for_term_deposit_entity_1.INTRATETD; }, function (idftd) { return idftd.category; }, {
            cascade: ["insert", "update"]
        })
    ], INTCATEGORYMASTER.prototype, "idftd");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pat_scheme_interest_rates_entity_1.INTRATEPATSCHEMES; }, function (patdeposit) { return patdeposit.category; }, {
            cascade: ["insert", "update"]
        })
    ], INTCATEGORYMASTER.prototype, "patdeposit");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return saving_and_pigmy_interest_rates_entity_1.INTRATESBPG; }, function (sapintrate) { return sapintrate.category; }, {
            cascade: ["insert", "update"]
        })
    ], INTCATEGORYMASTER.prototype, "sapintrate");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return interest_rate_for_loan_and_cc_entity_1.INTRATELOAN; }, function (loanandcc) { return loanandcc.category; }, {
            cascade: ["insert", "update"]
        })
    ], INTCATEGORYMASTER.prototype, "loanandcc");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return deposit_intrest_rate_entity_1.INTRATETDMULTI; }, function (depointrate) { return depointrate.INT_CATEGORY; }, {
            cascade: ["insert", "update"]
        })
    ], INTCATEGORYMASTER.prototype, "depointrate");
    INTCATEGORYMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], INTCATEGORYMASTER);
    return INTCATEGORYMASTER;
}());
exports.INTCATEGORYMASTER = INTCATEGORYMASTER;
