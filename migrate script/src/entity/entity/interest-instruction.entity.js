"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INTINSTRUCTION = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var INTINSTRUCTION = /** @class */ (function () {
    function INTINSTRUCTION() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INTINSTRUCTION.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], INTINSTRUCTION.prototype, "INSTRUCTION_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "INSTRUCTION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "FROM_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "NEXT_EXE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "EXECUTION_DAY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "DR_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], INTINSTRUCTION.prototype, "DR_AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTINSTRUCTION.prototype, "DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "DR_PARTICULARS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "CR_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], INTINSTRUCTION.prototype, "CR_AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "CR_PARTICULARS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "SI_FREQUENCY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "LAST_EXEC_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTINSTRUCTION.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "ADV_NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ "default": '0' })
    ], INTINSTRUCTION.prototype, "DEFAULT_INTEREST_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "REVOKE_DATE");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], INTINSTRUCTION.prototype, "SYSADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "SYSADD_LOGIN");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], INTINSTRUCTION.prototype, "SYSCHNG_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTION.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCode) { return BranchCode.branchCodeIns; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], INTINSTRUCTION.prototype, "BranchCode");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (interestDr) { return interestDr.interestDr; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "DR_ACTYPE" })
    ], INTINSTRUCTION.prototype, "interestDr");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (interestCr) { return interestCr.interestCr; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "CR_ACTYPE" })
    ], INTINSTRUCTION.prototype, "interestCr");
    INTINSTRUCTION = __decorate([
        (0, typeorm_1.Entity)()
    ], INTINSTRUCTION);
    return INTINSTRUCTION;
}());
exports.INTINSTRUCTION = INTINSTRUCTION;
