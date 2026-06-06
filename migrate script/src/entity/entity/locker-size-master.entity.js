"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LOCKERSIZE = void 0;
var typeorm_1 = require("typeorm");
var locker_rackwise_master_entity_1 = require("./locker-rackwise-master.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var LOCKERSIZE = /** @class */ (function () {
    function LOCKERSIZE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LOCKERSIZE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], LOCKERSIZE.prototype, "SIZE_SR_NO");
    __decorate([
        (0, typeorm_1.Column)({ length: 50 })
    ], LOCKERSIZE.prototype, "SIZE_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 12, scale: 2 })
    ], LOCKERSIZE.prototype, "RENT");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return locker_rackwise_master_entity_1.LOCKERMASTER; }, function (rackwise) { return rackwise.rack; }, {
            cascade: ["insert", "update"]
        })
    ], LOCKERSIZE.prototype, "rackwise");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERSIZE.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.lockersize; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], LOCKERSIZE.prototype, "BranchCodeMaster");
    LOCKERSIZE = __decorate([
        (0, typeorm_1.Entity)()
    ], LOCKERSIZE);
    return LOCKERSIZE;
}());
exports.LOCKERSIZE = LOCKERSIZE;
