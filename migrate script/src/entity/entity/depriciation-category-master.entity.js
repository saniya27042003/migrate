"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DEPRCATEGORY = void 0;
var gl_account_master_entity_1 = require("./gl-account-master.entity");
var depriciation_rate_master_entity_1 = require("./depriciation-rate-master.entity");
var typeorm_1 = require("typeorm");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var DEPRCATEGORY = /** @class */ (function () {
    function DEPRCATEGORY() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DEPRCATEGORY.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], DEPRCATEGORY.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: false })
    ], DEPRCATEGORY.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPRCATEGORY.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return gl_account_master_entity_1.ACMASTER; }, function (depaccountno) { return depaccountno.deprecat; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_NO" })
    ], DEPRCATEGORY.prototype, "depaccountno");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return depriciation_rate_master_entity_1.DEPRRATE; }, function (deprerate) { return deprerate.decategory; }, {
            cascade: ["insert", "update"]
        })
    ], DEPRCATEGORY.prototype, "deprerate");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPRCATEGORY.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.depre; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], DEPRCATEGORY.prototype, "BranchCodeMaster");
    DEPRCATEGORY = __decorate([
        (0, typeorm_1.Entity)()
    ], DEPRCATEGORY);
    return DEPRCATEGORY;
}());
exports.DEPRCATEGORY = DEPRCATEGORY;
