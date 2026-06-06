"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LNMASTER = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var coborrower_entity_1 = require("./coborrower.entity");
var customer_id_entity_1 = require("./customer-id.entity");
var dispute_loan_master_entity_1 = require("./dispute-loan-master.entity");
var guarantor_entity_1 = require("./guarantor.entity");
var security_entity_1 = require("./security.entity");
var purpose_master_entity_1 = require("./purpose-master.entity");
var authority_master_entity_1 = require("./authority-master.entity");
var LNMASTER = /** @class */ (function () {
    function LNMASTER() {
    }
    LNMASTER_1 = LNMASTER;
    var LNMASTER_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LNMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Index)('lnmasteracnotype'),
        (0, typeorm_1.Column)()
    ], LNMASTER.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Index)('lnmasteractype'),
        (0, typeorm_1.Column)()
    ], LNMASTER.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Index)('lnmasteracno'),
        (0, typeorm_1.Column)()
    ], LNMASTER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_CUSTID");
    __decorate([
        (0, typeorm_1.Index)('lnmasterbankacno'),
        (0, typeorm_1.Column)({ length: 15 })
    ], LNMASTER.prototype, "BANKACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_OPDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_OPEN_OLD_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], LNMASTER.prototype, "AC_IS_RECOVERY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], LNMASTER.prototype, "IS_WEAKER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "REF_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_INTCATA");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_SANCTION_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_SANCTION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_DRAWPOWER_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_EXPIRE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_INTRATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_REPAYMODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "INSTALLMENT_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_INSTALLMENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_MORATORIUM_PERIOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_GRACE_PERIOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_AUTHORITY");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return authority_master_entity_1.AUTHORITYMASTER; }, function (authority) { return authority.authority; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_AUTHORITY" })
    ], LNMASTER.prototype, "authority");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_RECOMMEND_BY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_RECOVERY_CLERK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_PRIORITY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_PRIORITY_SUB1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_PRIORITY_SUB2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_PRIORITY_SUB3");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_WEAKER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_PURPOSE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return purpose_master_entity_1.PURPOSEMASTER; }, function (purpose) { return purpose.purpose; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_PURPOSE" })
    ], LNMASTER.prototype, "purpose");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_INDUSTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_HEALTH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_RELATION_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_DIRECTOR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_DIRECTOR_RELATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_COREG_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_COREG_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_COREG_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_RESO_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_RESO_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_FREEZE_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_FREEZE_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_FREEZE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_FREEZE_REASON");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_ODAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_SODAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_ODDAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_ODDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 1 })
    ], LNMASTER.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_CLOSEDT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], LNMASTER.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], LNMASTER.prototype, "SYSADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "SYSADD_LOGIN");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], LNMASTER.prototype, "SYSCHNG_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], LNMASTER.prototype, "IS_DORMANT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AUTO_MATURED_PAYABLEAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AUTO_MATURED_INTERESTAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_ACTDATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_OP_TOTAL_DEPOSITAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "OP_POSTED_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "IS_DISPUTE_LOAN");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], LNMASTER.prototype, "IS_POST_INT_AC");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], LNMASTER.prototype, "IS_AGGRI_LOAN");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_OP_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_PAYBLEINT_OP");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_PINT_OP");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_MEMBTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_MEMBNO");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], LNMASTER.prototype, "idmasterID");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], LNMASTER.prototype, "ORA_CUSTID");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], LNMASTER.prototype, "REF_ID");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], LNMASTER.prototype, "ORA_AC_NAME");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return customer_id_entity_1.IDMASTER; }, function (termLoan) { return termLoan.termLoan; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idmasterID" })
    ], LNMASTER.prototype, "idmaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return guarantor_entity_1.GUARANTERDETAILS; }, function (guaranterMaster) { return guaranterMaster.lnmaster; }, {
            cascade: ["insert", "update"]
        })
    ], LNMASTER.prototype, "guaranterMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return coborrower_entity_1.COBORROWER; }, function (CoborrowerMaster) { return CoborrowerMaster.lnmaster; }, {
            cascade: ["insert", "update"]
        })
    ], LNMASTER.prototype, "CoborrowerMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return dispute_loan_master_entity_1.LNDISPUTEDETAILS; }, function (disputeloan) { return disputeloan.lnDisputemasterID; }, {
            cascade: ["insert", "update"]
        })
    ], LNMASTER.prototype, "disputeloanMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return security_entity_1.SECURITYDETAILS; }, function (securityMaster) { return securityMaster.lnmaster; }, {
            cascade: ["insert", "update"]
        })
    ], LNMASTER.prototype, "securityMaster");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.branchCodeLN; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], LNMASTER.prototype, "BranchCodeMaster");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (LNCCMaster) { return LNCCMaster.lncccode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], LNMASTER.prototype, "LNCCMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return LNMASTER_1; }, function (termLoan) { return termLoan.termLoan; }, {
            cascade: ["insert", "update"]
        })
    ], LNMASTER.prototype, "termLoan");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_SECURITY_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_OP_CD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_BALDATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_PAID_INT_OP");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_LINTEDT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_RECBLEODUEINT_OP");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "OP_NPA_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LNMASTER.prototype, "AC_LINTDT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNMASTER.prototype, "AC_RECBLEINT_OP");
    LNMASTER = LNMASTER_1 = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(['BANKACNO']),
        (0, typeorm_1.Index)("NDXLNMASTER", ["BRANCH_CODE", "AC_ACNOTYPE", "AC_TYPE", "BANKACNO"]),
        (0, typeorm_1.Index)("NDXLNMASTER1", ["BRANCH_CODE", "AC_ACNOTYPE", "AC_TYPE", "AC_NO"])
    ], LNMASTER);
    return LNMASTER;
}());
exports.LNMASTER = LNMASTER;
