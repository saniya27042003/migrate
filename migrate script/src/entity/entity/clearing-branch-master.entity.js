"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BRANCHMASTER = void 0;
var gl_account_master_entity_1 = require("./gl-account-master.entity");
var typeorm_1 = require("typeorm");
var BRANCHMASTER = /** @class */ (function () {
    function BRANCHMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BRANCHMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], BRANCHMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: false })
    ], BRANCHMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHMASTER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return gl_account_master_entity_1.ACMASTER; }, function (accountNo) { return accountNo.clearingBranch; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_NO" })
    ], BRANCHMASTER.prototype, "accountNo");
    BRANCHMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], BRANCHMASTER);
    return BRANCHMASTER;
}());
exports.BRANCHMASTER = BRANCHMASTER;
