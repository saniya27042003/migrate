"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IDMASTER = void 0;
var typeorm_1 = require("typeorm");
var share_master_entity_1 = require("./share-master.entity");
var tds_form_entity_1 = require("./tds-form.entity");
var document_entity_1 = require("./document.entity");
var term_loan_master_entity_1 = require("./term-loan-master.entity");
var dpmaster_entity_1 = require("./dpmaster.entity");
var pgmaster_entity_1 = require("./pgmaster.entity");
var cast_master_entity_1 = require("./cast-master.entity");
var ocuupation_master_entity_1 = require("./ocuupation-master.entity");
var risk_category_entity_1 = require("./risk-category.entity");
var IDMASTER = /** @class */ (function () {
    function IDMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
        // @Column()
    ], IDMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
        // @Generated('increment')
    ], IDMASTER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_MEMBTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_MEMBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_TITLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "F_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "L_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "M_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_OCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 14 })
    ], IDMASTER.prototype, "AC_ADHARNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_RISKCATG");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_BIRTH_DT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_PANNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 13 })
    ], IDMASTER.prototype, "AC_MOBILENO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_PHONE_RES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_PHONE_OFFICE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_EMAILID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], IDMASTER.prototype, "TDSDOCUMNET");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], IDMASTER.prototype, "TDS_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], IDMASTER.prototype, "SMS_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], IDMASTER.prototype, "IS_KYC_RECEIVED");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ nullable: true })
    ], IDMASTER.prototype, "SYSADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "SYSADD_LOGIN");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], IDMASTER.prototype, "SYSCHNG_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Index)('IDMASTERBRANCH'),
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return tds_form_entity_1.TDSFORMSUBMIT; }, function (tdsForm) { return tdsForm.idmaster; }, {
            cascade: ["insert", "update"]
        })
    ], IDMASTER.prototype, "tdsForm");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return share_master_entity_1.SHMASTER; }, function (shareMaster) { return shareMaster.idmaster; }, {
            cascade: ["insert", "update"]
        })
    ], IDMASTER.prototype, "shareMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return dpmaster_entity_1.DPMASTER; }, function (dpmaster) { return dpmaster.idmaster; }, {
            cascade: ["insert", "update"]
        })
    ], IDMASTER.prototype, "dpmaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return document_entity_1.CUSTDOCUMENT; }, function (custdocument) { return custdocument.idmaster; }, {
            cascade: ["insert", "update"]
        })
    ], IDMASTER.prototype, "custdocument");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return term_loan_master_entity_1.LNMASTER; }, function (termLoan) { return termLoan.idmaster; }, {
            cascade: ["insert", "update"]
        })
    ], IDMASTER.prototype, "termLoan");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pgmaster_entity_1.PGMASTER; }, function (pgmaster) { return pgmaster.idmaster; }, {
            cascade: ["insert", "update"]
        })
    ], IDMASTER.prototype, "pgmaster");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_CAST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_TITLE_REG");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "F_NAME_REG");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "M_NAME_REG");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "L_NAME_REG");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "AC_ADD_REG");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "ORA_AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IDMASTER.prototype, "ORA_BRANCH");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return cast_master_entity_1.CASTMASTER; }, function (castMaster) { return castMaster.cast; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_CAST" })
    ], IDMASTER.prototype, "castMaster");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ocuupation_master_entity_1.OCCUPATIONMASTER; }, function (occupMaster) { return occupMaster.occupation; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_OCODE" })
    ], IDMASTER.prototype, "occupMaster");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return risk_category_entity_1.RISKCATEGORYMASTER; }, function (riskCategory) { return riskCategory.riskMaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_RISKCATG" })
    ], IDMASTER.prototype, "riskCategory");
    IDMASTER = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(['AC_NO']),
        (0, typeorm_1.Index)("NDXIDMASTER", ["BRANCH_CODE", "AC_NO"])
    ], IDMASTER);
    return IDMASTER;
}());
exports.IDMASTER = IDMASTER;
