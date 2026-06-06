"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PGMASTER = void 0;
var typeorm_1 = require("typeorm");
var customer_id_entity_1 = require("./customer-id.entity");
var nominee_entity_1 = require("./nominee.entity");
// import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
var joint_account_entity_1 = require("./joint-account.entity");
var power_of_attorney_entity_1 = require("./power-of-attorney.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var pigmyChart_entity_1 = require("./pigmyChart.entity");
var PGMASTER = /** @class */ (function () {
    function PGMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PGMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Index)('pgmasteracnotype'),
        (0, typeorm_1.Column)()
    ], PGMASTER.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Index)('pgmasteractype'),
        (0, typeorm_1.Column)()
    ], PGMASTER.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Index)('pgmasteracno'),
        (0, typeorm_1.Column)()
    ], PGMASTER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Index)('pgmasterbankacno'),
        (0, typeorm_1.Column)({ length: 15 })
    ], PGMASTER.prototype, "BANKACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_CUSTID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_SHORT_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "REF_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_MEMBTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_MEMBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_AGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_OPDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_RENEW_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_LINTEDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_EXPDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_OCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_CATG");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_OPR_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_INTCATA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGMASTER.prototype, "AC_SCHMAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AGENT_BRANCH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AGENT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], PGMASTER.prototype, "AGENT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], PGMASTER.prototype, "AC_MINOR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_MBDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_GRDNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_GRDRELE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_INTROBRANCH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_INTROID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_INTRACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_INTRNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "SIGNATURE_AUTHORITY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], PGMASTER.prototype, "PG_COMM_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_IS_RECOVERY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_REF_RECEIPTNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_ASON_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGMASTER.prototype, "AC_MATUAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "IS_DISCOUNTED_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_FREEZE_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGMASTER.prototype, "AC_FREEZE_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_FREEZE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_FREEZE_REASON");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], PGMASTER.prototype, "IS_POST_INT_AC");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], PGMASTER.prototype, "IS_DORMANT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGMASTER.prototype, "AC_ODAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGMASTER.prototype, "AC_SODAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_ODDAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_ODDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "ORA_AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 1 })
    ], PGMASTER.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_CLOSEDT");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], PGMASTER.prototype, "SYSADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "SYSADD_LOGIN");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], PGMASTER.prototype, "SYSCHNG_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Column)()
    ], PGMASTER.prototype, "REF_ID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "ORA_CUSTID");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGMASTER.prototype, "AUTO_MATURED_PAYABLEAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGMASTER.prototype, "AUTO_MATURED_INTERESTAMT");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], PGMASTER.prototype, "idmasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return customer_id_entity_1.IDMASTER; }, function (idmaster) { return idmaster.pgmaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idmasterID" })
    ], PGMASTER.prototype, "idmaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return nominee_entity_1.NOMINEELINK; }, function (nomineeDetails) { return nomineeDetails.pgmasterId; }, {
            cascade: ["insert", "update"]
        })
    ], PGMASTER.prototype, "nomineeDetails");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return joint_account_entity_1.JointAcLink; }, function (jointAccounts) { return jointAccounts.pgmasterId; }, {
            cascade: ["insert", "update"]
        })
    ], PGMASTER.prototype, "jointAccounts");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return power_of_attorney_entity_1.ATTERONEYLINK; }, function (powerOfAttorney) { return powerOfAttorney.pgmasterId; }, {
            cascade: ["insert", "update"]
        })
    ], PGMASTER.prototype, "powerOfAttorney");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.branchCodePG; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], PGMASTER.prototype, "BranchCodeMaster");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (PGMaster) { return PGMaster.PGschemecode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], PGMASTER.prototype, "PGMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pigmyChart_entity_1.PIGMYCHARTMASTER; }, function (pigmychart) { return pigmychart.accountId; }, {
            cascade: ["insert", "update"]
        })
    ], PGMASTER.prototype, "pigmychart");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGMASTER.prototype, "AC_PAYBLEINT_OP");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGMASTER.prototype, "AC_OP_BAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_OP_CD");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], PGMASTER.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PGMASTER.prototype, "AC_PRODUCT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_BALDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_ACTDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_LINTDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "LAST_OD_INT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PGMASTER.prototype, "AC_RECOMMEND_BY");
    PGMASTER = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(['BANKACNO']),
        (0, typeorm_1.Index)("NDXPGMASTER", ["BRANCH_CODE", "AC_ACNOTYPE", "AC_TYPE", "BANKACNO"]),
        (0, typeorm_1.Index)("NDXPGMASTER1", ["BRANCH_CODE", "AC_ACNOTYPE", "AC_TYPE", "AC_NO"])
    ], PGMASTER);
    return PGMASTER;
}());
exports.PGMASTER = PGMASTER;
