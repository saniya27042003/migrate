"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.STANDINSTRUCTION = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var STANDINSTRUCTION = /** @class */ (function () {
    function STANDINSTRUCTION() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], STANDINSTRUCTION.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], STANDINSTRUCTION.prototype, "INSTRUCTION_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "INSTRUCTION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "FROM_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "TO_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "EXECUTION_DAY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "DR_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], STANDINSTRUCTION.prototype, "DR_AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "DR_PARTICULARS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "CR_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], STANDINSTRUCTION.prototype, "CR_AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "CR_PARTICULARS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "SI_FREQUENCY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "LAST_EXEC_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "REVOKE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], STANDINSTRUCTION.prototype, "MIN_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], STANDINSTRUCTION.prototype, "PAYINT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], STANDINSTRUCTION.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], STANDINSTRUCTION.prototype, "IS_AUTO_CUT_LNPGCOM");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], STANDINSTRUCTION.prototype, "SYSADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "SYSADD_LOGIN");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], STANDINSTRUCTION.prototype, "SYSCHNG_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTION.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCode) { return BranchCode.branchCodeIns; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], STANDINSTRUCTION.prototype, "BranchCode");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (standingInsDr) { return standingInsDr.standingInsDr; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "DR_ACTYPE" })
    ], STANDINSTRUCTION.prototype, "standingInsDr");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (standingInsCr) { return standingInsCr.standingInsCr; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "CR_ACTYPE" })
    ], STANDINSTRUCTION.prototype, "standingInsCr");
    STANDINSTRUCTION = __decorate([
        (0, typeorm_1.Entity)()
    ], STANDINSTRUCTION);
    return STANDINSTRUCTION;
}());
exports.STANDINSTRUCTION = STANDINSTRUCTION;
