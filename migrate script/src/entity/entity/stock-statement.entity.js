"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.STOCKSTATEMENT = void 0;
var security_code_entity_1 = require("./security-code.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var STOCKSTATEMENT = /** @class */ (function () {
    function STOCKSTATEMENT() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], STOCKSTATEMENT.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (stockstatement) { return stockstatement.stockstatement; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], STOCKSTATEMENT.prototype, "stockstatement");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], STOCKSTATEMENT.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (stockbranchcode) { return stockbranchcode.stockbranchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], STOCKSTATEMENT.prototype, "stockbranchcode");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (stockstat) { return stockstat.stockstat; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], STOCKSTATEMENT.prototype, "stockstat");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "STATEMENT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "RAW_MATERIAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "WORK_PROGRESS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "FINISHED_GOODS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "RAW_MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "WORK_MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "FINISHED_MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STOCKSTATEMENT.prototype, "SECURITY_TYPE");
    STOCKSTATEMENT = __decorate([
        (0, typeorm_1.Entity)()
    ], STOCKSTATEMENT);
    return STOCKSTATEMENT;
}());
exports.STOCKSTATEMENT = STOCKSTATEMENT;
