"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ITEMMASTER = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var typeorm_1 = require("typeorm");
var ITEMMASTER = /** @class */ (function () {
    function ITEMMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ITEMMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], ITEMMASTER.prototype, "ITEM_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
        // @Generated('increment')
    ], ITEMMASTER.prototype, "ITEM_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ITEMMASTER.prototype, "ITEM_NAME");
    __decorate([
        (0, typeorm_1.Column)()
    ], ITEMMASTER.prototype, "PURCHASE_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ITEMMASTER.prototype, "DEPR_CATEGORY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ITEMMASTER.prototype, "SUPPLIER_NAME");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], ITEMMASTER.prototype, "PURCHASE_OP_QUANTITY");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 8, scale: 2, "default": 0 })
    ], ITEMMASTER.prototype, "PURCHASE_RATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], ITEMMASTER.prototype, "PURCHASE_VALUE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ITEMMASTER.prototype, "OP_BAL_DATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], ITEMMASTER.prototype, "OP_QUANTITY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ITEMMASTER.prototype, "OP_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ITEMMASTER.prototype, "LAST_DEPR_DATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], ITEMMASTER.prototype, "GL_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], ITEMMASTER.prototype, "PURCHASE_QUANTITY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ITEMMASTER.prototype, "LAST_UNLOCK_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ITEMMASTER.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 1 })
    ], ITEMMASTER.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)()
    ], ITEMMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.branchCodeds; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], ITEMMASTER.prototype, "BranchCodeMaster");
    ITEMMASTER = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(['ITEM_CODE'])
    ], ITEMMASTER);
    return ITEMMASTER;
}());
exports.ITEMMASTER = ITEMMASTER;
