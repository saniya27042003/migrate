"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GOVTSECULIC = void 0;
var security_code_entity_1 = require("./security-code.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var GOVTSECULIC = /** @class */ (function () {
    function GOVTSECULIC() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], GOVTSECULIC.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], GOVTSECULIC.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (govsec) { return govsec.govsec; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], GOVTSECULIC.prototype, "govsec");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], GOVTSECULIC.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (govtseclic) { return govtseclic.govtseclic; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], GOVTSECULIC.prototype, "govtseclic");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "CERT_POLICY_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "CERT_POLICY_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], GOVTSECULIC.prototype, "MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "ASSURED_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], GOVTSECULIC.prototype, "PAIDUP_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], GOVTSECULIC.prototype, "SUM_ASSURED");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], GOVTSECULIC.prototype, "PREMIUM");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], GOVTSECULIC.prototype, "SURRENDER_VALUE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "PREMIUM_DUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "MATURE_DUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "NOMINEE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "SECURITY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOVTSECULIC.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (govtsecbranchcode) { return govtsecbranchcode.govtsecbranchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], GOVTSECULIC.prototype, "govtsecbranchcode");
    GOVTSECULIC = __decorate([
        (0, typeorm_1.Entity)()
    ], GOVTSECULIC);
    return GOVTSECULIC;
}());
exports.GOVTSECULIC = GOVTSECULIC;
