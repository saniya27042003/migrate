"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BATCHVOUCHERTRAN = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var typeorm_1 = require("typeorm");
var BATCHVOUCHERTRAN = /** @class */ (function () {
    function BATCHVOUCHERTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BATCHVOUCHERTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], BATCHVOUCHERTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], BATCHVOUCHERTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BATCHVOUCHERTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], BATCHVOUCHERTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)()
    ], BATCHVOUCHERTRAN.prototype, "COMP_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BATCHVOUCHERTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BATCHVOUCHERTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BATCHVOUCHERTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BATCHVOUCHERTRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BATCHVOUCHERTRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BATCHVOUCHERTRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BATCHVOUCHERTRAN.prototype, "FILE_IMPORT");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (voucherBranch) { return voucherBranch.voucherBranch; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], BATCHVOUCHERTRAN.prototype, "voucherBranch");
    BATCHVOUCHERTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], BATCHVOUCHERTRAN);
    return BATCHVOUCHERTRAN;
}());
exports.BATCHVOUCHERTRAN = BATCHVOUCHERTRAN;
