"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LNDISPUTEDETAILS = void 0;
var typeorm_1 = require("typeorm");
var security_entity_1 = require("./security.entity");
var guarantor_entity_1 = require("./guarantor.entity");
var term_loan_master_entity_1 = require("./term-loan-master.entity");
var LNDISPUTEDETAILS = /** @class */ (function () {
    function LNDISPUTEDETAILS() {
    }
    LNDISPUTEDETAILS_1 = LNDISPUTEDETAILS;
    var LNDISPUTEDETAILS_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LNDISPUTEDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "REF_AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "REF_AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "REF_AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "REF_OLD_AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "COURT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "CASE_SUITE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "COURT_ORDER_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "COURT_RESULT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "COURT_CASE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "COURT_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "SUITE_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "COURT_INSTALLMENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "RECOVERABLE_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "RECOVERABLE_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "INT_CALC_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "LOAN_STAGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "ADVOCATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "REF_OLD_AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "AC_REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNDISPUTEDETAILS.prototype, "lnDisputemasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return LNDISPUTEDETAILS_1; }, function (disputeloan) { return disputeloan.disputeloanmaster; }),
        (0, typeorm_1.JoinColumn)({ name: "lnDisputemasterID" })
    ], LNDISPUTEDETAILS.prototype, "disputeloanmaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return term_loan_master_entity_1.LNMASTER; }, function (termloan) { return termloan.lnmaster; }, {
            cascade: ["insert", "update"]
        })
    ], LNDISPUTEDETAILS.prototype, "termloan");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return guarantor_entity_1.GUARANTERDETAILS; }, function (guaranterMaster) { return guaranterMaster.lnmaster; }, {
            cascade: ["insert", "update"]
        })
    ], LNDISPUTEDETAILS.prototype, "guaranterMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return security_entity_1.SECURITYDETAILS; }, function (securityMaster) { return securityMaster.lnmaster; }, {
            cascade: ["insert", "update"]
        })
    ], LNDISPUTEDETAILS.prototype, "securityMaster");
    LNDISPUTEDETAILS = LNDISPUTEDETAILS_1 = __decorate([
        (0, typeorm_1.Entity)()
    ], LNDISPUTEDETAILS);
    return LNDISPUTEDETAILS;
}());
exports.LNDISPUTEDETAILS = LNDISPUTEDETAILS;
