"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OTHERSECURITY = void 0;
var security_code_entity_1 = require("./security-code.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var OTHERSECURITY = /** @class */ (function () {
    function OTHERSECURITY() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], OTHERSECURITY.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OTHERSECURITY.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (othersecbranchcode) { return othersecbranchcode.othersecbranchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], OTHERSECURITY.prototype, "othersecbranchcode");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OTHERSECURITY.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], OTHERSECURITY.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (othersec) { return othersec.othersec; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], OTHERSECURITY.prototype, "othersec");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0, length: 15 })
    ], OTHERSECURITY.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OTHERSECURITY.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (other) { return other.other; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], OTHERSECURITY.prototype, "other");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OTHERSECURITY.prototype, "SR_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OTHERSECURITY.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OTHERSECURITY.prototype, "SHORT_DETAILS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], OTHERSECURITY.prototype, "TOTAL_VALUE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], OTHERSECURITY.prototype, "MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OTHERSECURITY.prototype, "DETAILS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OTHERSECURITY.prototype, "SECURITY_TYPE");
    OTHERSECURITY = __decorate([
        (0, typeorm_1.Entity)()
    ], OTHERSECURITY);
    return OTHERSECURITY;
}());
exports.OTHERSECURITY = OTHERSECURITY;
