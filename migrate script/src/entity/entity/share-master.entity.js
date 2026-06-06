"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SHMASTER = void 0;
var typeorm_1 = require("typeorm");
var customer_id_entity_1 = require("./customer-id.entity");
var nominee_entity_1 = require("./nominee.entity");
var shares_dividend_entity_1 = require("./shares-dividend.entity");
var category_master_entity_1 = require("./category-master.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("../../../../../../../../src/entity/entity/schemeParameters.entity");
var SHMASTER = /** @class */ (function () {
    function SHMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SHMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Index)('shmasteractype'),
        (0, typeorm_1.Column)()
    ], SHMASTER.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Index)('shmasteracnotype'),
        (0, typeorm_1.Column)()
    ], SHMASTER.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Index)('shmasteracno'),
        (0, typeorm_1.Column)()
    ], SHMASTER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_CUSTID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Index)('shmasterbankacno'),
        (0, typeorm_1.Column)({ length: 15 })
    ], SHMASTER.prototype, "BANKACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHMASTER.prototype, "REF_ID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "EMP_NO");
    __decorate([
        (0, typeorm_1.Column)({ "default": '0' })
    ], SHMASTER.prototype, "AC_IS_RECOVERY");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SHMASTER.prototype, "AC_INSTALLMENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_JOIN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_RETIRE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_OPDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_SHBALDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "MEMBERSHIP_BY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_SREPRESENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_CATG");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_EXPDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "DEATH_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_DIRECT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_BRANCH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_SALARYDIVISION_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "SUB_SALARYDIVISION_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 20 })
    ], SHMASTER.prototype, "AC_SBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_RESNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_RESDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "REF_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_NARR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_OP_SHNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_FACE_VALUE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SHMASTER.prototype, "AC_OP_BAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_DEV_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_DEV_WARD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_DEV_ADD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_DEV_GALLI");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_DEV_AREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_DEV_CITYCODE");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], SHMASTER.prototype, "IS_DORMANT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SHMASTER.prototype, "AUTO_MATURED_PAYABLEAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SHMASTER.prototype, "AUTO_MATURED_INTERESTAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_FREEZE_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SHMASTER.prototype, "AC_FREEZE_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_FREEZE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_FREEZE_REASON");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 1 })
    ], SHMASTER.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_CLOSEDT");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], SHMASTER.prototype, "SYSADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "SYSADD_LOGIN");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], SHMASTER.prototype, "SYSCHNG_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], SHMASTER.prototype, "idmasterID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "DIV_TRANSFER_BRANCH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "DIV_TRANSFER_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "DIV_TRANSFER_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], SHMASTER.prototype, "DIV_TRANSFER_ACNO");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return customer_id_entity_1.IDMASTER; }, function (idmaster) { return idmaster.shareMaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idmasterID" })
    ], SHMASTER.prototype, "idmaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return nominee_entity_1.NOMINEELINK; }, function (nomineeDetails) { return nomineeDetails.sharesId; }, {
            cascade: ["insert", "update"]
        })
    ], SHMASTER.prototype, "nomineeDetails");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return shares_dividend_entity_1.HISTORYDIVIDEND; }, function (shareDividend) { return shareDividend.sharesId; }, {
            cascade: ["insert", "update"]
        })
    ], SHMASTER.prototype, "shareDividend");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return category_master_entity_1.CATEGORYMASTER; }, function (CategoryMaster) { return CategoryMaster.category; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_CATG" })
    ], SHMASTER.prototype, "CategoryMaster");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.branchCodesh; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], SHMASTER.prototype, "BranchCodeMaster");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (shareMaster) { return shareMaster.shareCode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], SHMASTER.prototype, "shareMaster");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (divBranchMaster) { return divBranchMaster.divBranch; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "DIV_TRANSFER_BRANCH" })
    ], SHMASTER.prototype, "divBranchMaster");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_OP_CD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "ORA_AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHMASTER.prototype, "ORA_CUSTID");
    SHMASTER = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(['BANKACNO']),
        (0, typeorm_1.Index)("NDXSHMASTER", ["BRANCH_CODE", "AC_ACNOTYPE", "AC_TYPE", "BANKACNO"]),
        (0, typeorm_1.Index)("NDXSHMASTER1", ["BRANCH_CODE", "AC_ACNOTYPE", "AC_TYPE", "AC_NO"])
    ], SHMASTER);
    return SHMASTER;
}());
exports.SHMASTER = SHMASTER;
