"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ACMASTER = void 0;
var clearing_branch_master_entity_1 = require("./clearing-branch-master.entity");
var depriciation_category_master_entity_1 = require("./depriciation-category-master.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var ACMASTER = /** @class */ (function () {
    function ACMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)()
    ], ACMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACMASTER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACMASTER.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "PARENT_NODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "AC_BCD");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "AC_OPDATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], ACMASTER.prototype, "IS_POST_INT_AC");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "AC_MEMBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "IS_DIRECT_ENTRY_ALLOW");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "IS_RED_BALANCE_AC");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "AC_IS_CASH_IN_TRANSIT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "IS_TAXABLEFOR_GST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "IS_ACTIVE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 'GL' })
    ], ACMASTER.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACMASTER.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACMASTER.prototype, "GL_LINK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "AC_SUBSCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "AC_CLOSEDT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACMASTER.prototype, "AC_OP_BAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACMASTER.prototype, "AC_OP_CD");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACMASTER.prototype, "AUTO_MATURED_PAYABLEAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ACMASTER.prototype, "AUTO_MATURED_INTERESTAMT");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], ACMASTER.prototype, "IS_DORMANT");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return clearing_branch_master_entity_1.BRANCHMASTER; }, function (clearingBranch) { return clearingBranch.accountNo; }, {
            cascade: ["insert", "update"]
        })
    ], ACMASTER.prototype, "clearingBranch");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (ownBranch) { return ownBranch.accNo; }, {
            cascade: ["insert", "update"]
        })
    ], ACMASTER.prototype, "ownBranch");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return depriciation_category_master_entity_1.DEPRCATEGORY; }, function (deprecat) { return deprecat.depaccountno; }, {
            cascade: ["insert", "update"]
        })
    ], ACMASTER.prototype, "deprecat");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (glAcMaster) { return glAcMaster.glAcMaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], ACMASTER.prototype, "glAcMaster");
    ACMASTER = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(['AC_NO'])
    ], ACMASTER);
    return ACMASTER;
}());
exports.ACMASTER = ACMASTER;
