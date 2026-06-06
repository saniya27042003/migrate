"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.COMPANYGROUPLINKMASTER = void 0;
var typeorm_1 = require("typeorm");
var company_group_master_entity_1 = require("./company-group-master.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var company_link_grid_entity_1 = require("./company-link-grid.entity");
var COMPANYGROUPLINKMASTER = /** @class */ (function () {
    function COMPANYGROUPLINKMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], COMPANYGROUPLINKMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ length: 5 })
    ], COMPANYGROUPLINKMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], COMPANYGROUPLINKMASTER.prototype, "FROM_AC");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], COMPANYGROUPLINKMASTER.prototype, "TO_AC");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], COMPANYGROUPLINKMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.comapnylink; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], COMPANYGROUPLINKMASTER.prototype, "BranchCodeMaster");
    __decorate([
        (0, typeorm_1.Column)()
    ], COMPANYGROUPLINKMASTER.prototype, "COMP_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return company_group_master_entity_1.COMPANYGROUPMASTER; }, function (comapny) { return comapny.comapnylink; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "COMP_CODE" })
    ], COMPANYGROUPLINKMASTER.prototype, "comapny");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return company_link_grid_entity_1.COMPANYGROUPLINKGRIDMASTER; }, function (comapnylink) { return comapnylink.comapny; })
    ], COMPANYGROUPLINKMASTER.prototype, "comapnylink");
    COMPANYGROUPLINKMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], COMPANYGROUPLINKMASTER);
    return COMPANYGROUPLINKMASTER;
}());
exports.COMPANYGROUPLINKMASTER = COMPANYGROUPLINKMASTER;
