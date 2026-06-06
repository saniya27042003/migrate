"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FIREPOLICY = void 0;
var security_code_entity_1 = require("./security-code.entity");
var insurance_master_entity_1 = require("./insurance-master.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var FIREPOLICY = /** @class */ (function () {
    function FIREPOLICY() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], FIREPOLICY.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FIREPOLICY.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], FIREPOLICY.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (fireactype) { return fireactype.fireactype; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], FIREPOLICY.prototype, "fireactype");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], FIREPOLICY.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FIREPOLICY.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FIREPOLICY.prototype, "POLICY_DUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FIREPOLICY.prototype, "POLICY_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FIREPOLICY.prototype, "POLICY_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FIREPOLICY.prototype, "POLICY_NATURE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FIREPOLICY.prototype, "INSU_CO_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return insurance_master_entity_1.INSUARANCEMASTER; }, function (insurancemaster) { return insurancemaster.insurancemaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "INSU_CO_CODE" })
    ], FIREPOLICY.prototype, "insurancemaster");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FIREPOLICY.prototype, "ADDRESS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FIREPOLICY.prototype, "CITY");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FIREPOLICY.prototype, "PREMIUM");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FIREPOLICY.prototype, "PREMIUM_DUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FIREPOLICY.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (firepolicy) { return firepolicy.firepolicy; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], FIREPOLICY.prototype, "firepolicy");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FIREPOLICY.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (firebranchcode) { return firebranchcode.firebranchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], FIREPOLICY.prototype, "firebranchcode");
    FIREPOLICY = __decorate([
        (0, typeorm_1.Entity)()
    ], FIREPOLICY);
    return FIREPOLICY;
}());
exports.FIREPOLICY = FIREPOLICY;
