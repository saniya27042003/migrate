"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SECINSURANCE = void 0;
var security_code_entity_1 = require("./security-code.entity");
var insurance_master_entity_1 = require("./insurance-master.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var SECINSURANCE = /** @class */ (function () {
    function SECINSURANCE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SECINSURANCE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECINSURANCE.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECINSURANCE.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (secinsubranch) { return secinsubranch.secinsubranch; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], SECINSURANCE.prototype, "secinsubranch");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECINSURANCE.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (custinsurace) { return custinsurace.custinsurace; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], SECINSURANCE.prototype, "custinsurace");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, "default": 0 })
    ], SECINSURANCE.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECINSURANCE.prototype, "INSURANCE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECINSURANCE.prototype, "POLICY_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECINSURANCE.prototype, "INSU_COMPANY_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return insurance_master_entity_1.INSUARANCEMASTER; }, function (custinsurancemaster) { return custinsurancemaster.custinsurancemaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "INSU_COMPANY_CODE" })
    ], SECINSURANCE.prototype, "custinsurancemaster");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECINSURANCE.prototype, "INSU_EXP_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SECINSURANCE.prototype, "INSU_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECINSURANCE.prototype, "SECURITY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECINSURANCE.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (custinsurance) { return custinsurance.custinsurance; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], SECINSURANCE.prototype, "custinsurance");
    SECINSURANCE = __decorate([
        (0, typeorm_1.Entity)()
    ], SECINSURANCE);
    return SECINSURANCE;
}());
exports.SECINSURANCE = SECINSURANCE;
