"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LOCKERMASTER = void 0;
var typeorm_1 = require("typeorm");
var locker_size_master_entity_1 = require("./locker-size-master.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var LOCKERMASTER = /** @class */ (function () {
    function LOCKERMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LOCKERMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], LOCKERMASTER.prototype, "RACK_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOCKERMASTER.prototype, "LOCKER_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOCKERMASTER.prototype, "KEY_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOCKERMASTER.prototype, "SIZE_SR_NO");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return locker_size_master_entity_1.LOCKERSIZE; }, function (rack) { return rack.rackwise; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SIZE_SR_NO" })
    ], LOCKERMASTER.prototype, "rack");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.lockerwise; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], LOCKERMASTER.prototype, "BranchCodeMaster");
    LOCKERMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], LOCKERMASTER);
    return LOCKERMASTER;
}());
exports.LOCKERMASTER = LOCKERMASTER;
