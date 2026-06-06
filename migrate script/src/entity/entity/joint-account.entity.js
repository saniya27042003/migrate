"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JointAcLink = void 0;
var typeorm_1 = require("typeorm");
var dpmaster_entity_1 = require("./dpmaster.entity");
var pgmaster_entity_1 = require("./pgmaster.entity");
var JointAcLink = /** @class */ (function () {
    function JointAcLink() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], JointAcLink.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], JointAcLink.prototype, "JOINT_AC_CUSTID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], JointAcLink.prototype, "JOINT_ACNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], JointAcLink.prototype, "OPERATOR");
    __decorate([
        (0, typeorm_1.Column)({ unique: false, nullable: true })
    ], JointAcLink.prototype, "DPMasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return dpmaster_entity_1.DPMASTER; }, function (dpmasterId) { return dpmasterId.jointAccounts; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "DPMasterID" })
    ], JointAcLink.prototype, "dpmasterId");
    __decorate([
        (0, typeorm_1.Column)({ unique: false, nullable: true })
    ], JointAcLink.prototype, "PGMasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return pgmaster_entity_1.PGMASTER; }, function (pgmasterId) { return pgmasterId.jointAccounts; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "PGMasterID" })
    ], JointAcLink.prototype, "pgmasterId");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], JointAcLink.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], JointAcLink.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], JointAcLink.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], JointAcLink.prototype, "BANKACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], JointAcLink.prototype, "ORA_AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], JointAcLink.prototype, "REF_ID");
    JointAcLink = __decorate([
        (0, typeorm_1.Entity)()
    ], JointAcLink);
    return JointAcLink;
}());
exports.JointAcLink = JointAcLink;
