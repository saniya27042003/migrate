"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DPMASTER = void 0;
var typeorm_1 = require("typeorm");
var customer_id_entity_1 = require("./customer-id.entity");
var joint_account_entity_1 = require("./joint-account.entity");
var nominee_entity_1 = require("./nominee.entity");
var power_of_attorney_entity_1 = require("./power-of-attorney.entity");
var interest_category_master_entity_1 = require("./interest-category-master.entity");
var category_master_entity_1 = require("./category-master.entity");
var operation_master_entity_1 = require("./operation-master.entity");
var minimum_balance_master_entity_1 = require("./minimum-balance-master.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var DPMASTER = /** @class */ (function () {
    function DPMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DPMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Index)('dpmasteracnotype'),
        (0, typeorm_1.Column)()
    ], DPMASTER.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Index)('dpmasteractype'),
        (0, typeorm_1.Column)()
    ], DPMASTER.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Index)('dpmasteracno'),
        (0, typeorm_1.Column)()
    ], DPMASTER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Index)('dpmasterbankacno'),
        (0, typeorm_1.Column)({ length: 15 })
    ], DPMASTER.prototype, "BANKACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_CATG");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_BALCATG");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_OPR_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_CUSTID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_INTCATA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_OPDATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AC_SCHMAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "REF_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], DPMASTER.prototype, "AC_MINOR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_MBDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_GRDNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_GRDRELE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AUTO_MATURED_PAYABLEAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AUTO_MATURED_INTERESTAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_INTROBRANCH");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchMaster) { return BranchMaster.branch; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_INTROBRANCH" })
    ], DPMASTER.prototype, "BranchMaster");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_INTROID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], DPMASTER.prototype, "AC_INTRACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_INTRNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "SIGNATURE_AUTHORITY");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DPMASTER.prototype, "IS_POST_INT_AC");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_PROPRITOR_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "PIGMY_ACTYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (PGDPMaster) { return PGDPMaster.PGDPMaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "PIGMY_ACTYPE" })
    ], DPMASTER.prototype, "PGDPMaster");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "INVEST_BANK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "INVEST_BRANCH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_REF_RECEIPTNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_ASON_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_EXPDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AC_INTRATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AC_MATUAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_CLOSEDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "DEBIT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_PARTICULAR");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DPMASTER.prototype, "AC_IS_RECOVERY");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], DPMASTER.prototype, "SYSADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "SYSADD_LOGIN");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], DPMASTER.prototype, "SYSCHNG_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_FREEZE_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AC_FREEZE_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_FREEZE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_FREEZE_REASON");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "ORA_AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DPMASTER.prototype, "ORA_CUSTID");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AC_ODAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AC_SODAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_ODDAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_ODDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_MEMBTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_MEMBNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AC_OP_BAL");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], DPMASTER.prototype, "IS_DORMANT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "IS_DISCOUNTED_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "idmasterID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 1 })
    ], DPMASTER.prototype, "status");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return customer_id_entity_1.IDMASTER; }, function (idmaster) { return idmaster.dpmaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idmasterID" })
    ], DPMASTER.prototype, "idmaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return nominee_entity_1.NOMINEELINK; }, function (nomineeDetails) { return nomineeDetails.dpmasterId; }, {
            cascade: ["insert", "update"]
        })
    ], DPMASTER.prototype, "nomineeDetails");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return joint_account_entity_1.JointAcLink; }, function (jointAccounts) { return jointAccounts.dpmasterId; }, {
            cascade: ["insert", "update"]
        })
    ], DPMASTER.prototype, "jointAccounts");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return power_of_attorney_entity_1.ATTERONEYLINK; }, function (powerOfAttorney) { return powerOfAttorney.dpmasterId; }, {
            cascade: ["insert", "update"]
        })
    ], DPMASTER.prototype, "powerOfAttorney");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return interest_category_master_entity_1.INTCATEGORYMASTER; }, function (intCategory) { return intCategory.interestCategory; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_INTCATA" })
    ], DPMASTER.prototype, "intCategory");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return category_master_entity_1.CATEGORYMASTER; }, function (CategoryMaster) { return CategoryMaster.DPcategory; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_CATG" })
    ], DPMASTER.prototype, "CategoryMaster");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return operation_master_entity_1.OPERATIONMASTER; }, function (OperationMaster) { return OperationMaster.operation; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_OPR_CODE" })
    ], DPMASTER.prototype, "OperationMaster");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return minimum_balance_master_entity_1.BALACATA; }, function (MinimumBalanceMaster) { return MinimumBalanceMaster.minimumBalance; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_BALCATG" })
    ], DPMASTER.prototype, "MinimumBalanceMaster");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.branchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], DPMASTER.prototype, "BranchCodeMaster");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (DPMaster) { return DPMaster.DPschemecode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], DPMASTER.prototype, "DPMaster");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DPMASTER.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_PRODUCT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_LINTEDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_BALDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_ACTDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_OP_CD");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AC_PINT_OP");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AC_PAYBLEINT_OP");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AC_ODEPINS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DPMASTER.prototype, "AC_PAID_INT_OP");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "OP_CR_INT_FIN_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "OP_INT_PAID_FIN_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "LAST_TDS_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_LINTDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_KEYWORD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "LOCKER_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "RACK_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "TD_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "TD_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "LAST_OD_INT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "AC_RECOMMEND_BY");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DPMASTER.prototype, "REQ_RENEW");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DPMASTER.prototype, "BENEF_NAME");
    __decorate([
        (0, typeorm_1.Column)()
    ], DPMASTER.prototype, "REF_ID");
    DPMASTER = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(['BANKACNO']),
        (0, typeorm_1.Index)("NDXDPMASTER", ["BRANCH_CODE", "AC_ACNOTYPE", "AC_TYPE", "BANKACNO"]),
        (0, typeorm_1.Index)("NDXDPMASTER1", ["BRANCH_CODE", "AC_ACNOTYPE", "AC_TYPE", "AC_NO"])
    ], DPMASTER);
    return DPMASTER;
}());
exports.DPMASTER = DPMASTER;
