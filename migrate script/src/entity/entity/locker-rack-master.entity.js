"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LOCKERRACKMASTER = void 0;
var typeorm_1 = require("typeorm");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var LOCKERRACKMASTER = /** @class */ (function () {
    function LOCKERRACKMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LOCKERRACKMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], LOCKERRACKMASTER.prototype, "RACK_NO");
    __decorate([
        (0, typeorm_1.Column)({ length: 50 })
    ], LOCKERRACKMASTER.prototype, "RACK_DESC");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOCKERRACKMASTER.prototype, "LOCKER_FROMNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], LOCKERRACKMASTER.prototype, "LOCKER_TONO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LOCKERRACKMASTER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCodeMaster) { return BranchCodeMaster.locker; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], LOCKERRACKMASTER.prototype, "BranchCodeMaster");
    LOCKERRACKMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], LOCKERRACKMASTER);
    return LOCKERRACKMASTER;
}());
exports.LOCKERRACKMASTER = LOCKERRACKMASTER;
