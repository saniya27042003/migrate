"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BRANCHWISEDIVIDEND = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var typeorm_1 = require("typeorm");
var BRANCHWISEDIVIDEND = /** @class */ (function () {
    function BRANCHWISEDIVIDEND() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BRANCHWISEDIVIDEND.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEDIVIDEND.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEDIVIDEND.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEDIVIDEND.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], BRANCHWISEDIVIDEND.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEDIVIDEND.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEDIVIDEND.prototype, "MEMB_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEDIVIDEND.prototype, "MEMB_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BRANCHWISEDIVIDEND.prototype, "CURR_SHARE_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BRANCHWISEDIVIDEND.prototype, "KAYAM_DEP_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BRANCHWISEDIVIDEND.prototype, "PRASANGIK_LN_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BRANCHWISEDIVIDEND.prototype, "MEDIUM_LN_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BRANCHWISEDIVIDEND.prototype, "VISHES_LN_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BRANCHWISEDIVIDEND.prototype, "COMPUTER_LN_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BRANCHWISEDIVIDEND.prototype, "KALYAN_NIDI_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEDIVIDEND.prototype, "AC_SALARYDIVISION_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEDIVIDEND.prototype, "SALARYDIVISION_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEDIVIDEND.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (branchDividend) { return branchDividend.branchDividend; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], BRANCHWISEDIVIDEND.prototype, "branchDividend");
    BRANCHWISEDIVIDEND = __decorate([
        (0, typeorm_1.Entity)()
    ], BRANCHWISEDIVIDEND);
    return BRANCHWISEDIVIDEND;
}());
exports.BRANCHWISEDIVIDEND = BRANCHWISEDIVIDEND;
