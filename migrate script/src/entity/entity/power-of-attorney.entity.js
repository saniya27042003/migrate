"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ATTERONEYLINK = void 0;
var typeorm_1 = require("typeorm");
var dpmaster_entity_1 = require("./dpmaster.entity");
var pgmaster_entity_1 = require("./pgmaster.entity");
var ATTERONEYLINK = /** @class */ (function () {
    function ATTERONEYLINK() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ATTERONEYLINK.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ATTERONEYLINK.prototype, "ATTERONEY_NAME");
    __decorate([
        (0, typeorm_1.Column)()
    ], ATTERONEYLINK.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ATTERONEYLINK.prototype, "DATE_APPOINTED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ATTERONEYLINK.prototype, "DATE_EXPIRY");
    __decorate([
        (0, typeorm_1.Column)({ unique: false, nullable: true })
    ], ATTERONEYLINK.prototype, "DPMasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return dpmaster_entity_1.DPMASTER; }, function (dpmasterId) { return dpmasterId.powerOfAttorney; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "DPMasterID" })
    ], ATTERONEYLINK.prototype, "dpmasterId");
    __decorate([
        (0, typeorm_1.Column)({ unique: false, nullable: true })
    ], ATTERONEYLINK.prototype, "PGMasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return pgmaster_entity_1.PGMASTER; }, function (pgmasterId) { return pgmasterId.powerOfAttorney; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "PGMasterID" })
    ], ATTERONEYLINK.prototype, "pgmasterId");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ATTERONEYLINK.prototype, "ORA_AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ATTERONEYLINK.prototype, "REF_ID");
    ATTERONEYLINK = __decorate([
        (0, typeorm_1.Entity)()
    ], ATTERONEYLINK);
    return ATTERONEYLINK;
}());
exports.ATTERONEYLINK = ATTERONEYLINK;
