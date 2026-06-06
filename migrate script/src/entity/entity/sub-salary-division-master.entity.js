"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SUBSALARYMASTER = void 0;
var typeorm_1 = require("typeorm");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var salary_division_master_entity_1 = require("./salary-division-master.entity");
var SUBSALARYMASTER = /** @class */ (function () {
    function SUBSALARYMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SUBSALARYMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], SUBSALARYMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], SUBSALARYMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: true })
    ], SUBSALARYMASTER.prototype, "AT_POST");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: true })
    ], SUBSALARYMASTER.prototype, "TALUKA_NAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: true })
    ], SUBSALARYMASTER.prototype, "DISTRICT_NAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: true })
    ], SUBSALARYMASTER.prototype, "AC_EMAILID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 10 })
    ], SUBSALARYMASTER.prototype, "PHNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 10 })
    ], SUBSALARYMASTER.prototype, "MOBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SUBSALARYMASTER.prototype, "SAL_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return salary_division_master_entity_1.SALARYDIVISIONMASTER; }, function (sub) { return sub.subsalary; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SAL_CODE" })
    ], SUBSALARYMASTER.prototype, "sub");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SUBSALARYMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.subsal; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], SUBSALARYMASTER.prototype, "BranchCodeMaster");
    SUBSALARYMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], SUBSALARYMASTER);
    return SUBSALARYMASTER;
}());
exports.SUBSALARYMASTER = SUBSALARYMASTER;
