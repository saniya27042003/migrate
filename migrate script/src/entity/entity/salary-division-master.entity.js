"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SALARYDIVISIONMASTER = void 0;
var typeorm_1 = require("typeorm");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var sub_salary_division_master_entity_1 = require("./sub-salary-division-master.entity");
var SALARYDIVISIONMASTER = /** @class */ (function () {
    function SALARYDIVISIONMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SALARYDIVISIONMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], SALARYDIVISIONMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], SALARYDIVISIONMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 50 })
    ], SALARYDIVISIONMASTER.prototype, "SHORT_NAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, nullable: true })
    ], SALARYDIVISIONMASTER.prototype, "AT_POST");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, nullable: true })
    ], SALARYDIVISIONMASTER.prototype, "TALUKA_NAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, nullable: true })
    ], SALARYDIVISIONMASTER.prototype, "DISTRICT_NAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 10, nullable: true })
    ], SALARYDIVISIONMASTER.prototype, "PHNO");
    __decorate([
        (0, typeorm_1.Column)({ length: 10, nullable: true })
    ], SALARYDIVISIONMASTER.prototype, "MOBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SALARYDIVISIONMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (branch) { return branch.salarydiv; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], SALARYDIVISIONMASTER.prototype, "branch");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return sub_salary_division_master_entity_1.SUBSALARYMASTER; }, function (subsalary) { return subsalary.sub; }, {
            cascade: ["insert", "update"]
        })
    ], SALARYDIVISIONMASTER.prototype, "subsalary");
    SALARYDIVISIONMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], SALARYDIVISIONMASTER);
    return SALARYDIVISIONMASTER;
}());
exports.SALARYDIVISIONMASTER = SALARYDIVISIONMASTER;
