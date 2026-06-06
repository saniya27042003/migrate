"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.COMPANYGROUPMASTER = void 0;
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var company_group_link_master_entity_1 = require("./company-group-link-master.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var COMPANYGROUPMASTER = /** @class */ (function () {
    function COMPANYGROUPMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], COMPANYGROUPMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], COMPANYGROUPMASTER.prototype, "COMP_CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 200 })
    ], COMPANYGROUPMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 2000, nullable: true })
    ], COMPANYGROUPMASTER.prototype, "ADDRESS");
    __decorate([
        (0, typeorm_1.Column)()
    ], COMPANYGROUPMASTER.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], COMPANYGROUPMASTER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], COMPANYGROUPMASTER.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (company) { return company.scheme; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], COMPANYGROUPMASTER.prototype, "company");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], COMPANYGROUPMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.comapny; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], COMPANYGROUPMASTER.prototype, "BranchCodeMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return company_group_link_master_entity_1.COMPANYGROUPLINKMASTER; }, function (comapnylink) { return comapnylink.comapny; })
    ], COMPANYGROUPMASTER.prototype, "comapnylink");
    COMPANYGROUPMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], COMPANYGROUPMASTER);
    return COMPANYGROUPMASTER;
}());
exports.COMPANYGROUPMASTER = COMPANYGROUPMASTER;
