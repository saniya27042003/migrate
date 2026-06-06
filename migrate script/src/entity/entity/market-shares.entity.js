"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MARKETSHARE = void 0;
var security_code_entity_1 = require("./security-code.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var MARKETSHARE = /** @class */ (function () {
    function MARKETSHARE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MARKETSHARE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MARKETSHARE.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MARKETSHARE.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (marketshare) { return marketshare.marketshare; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], MARKETSHARE.prototype, "marketshare");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], MARKETSHARE.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MARKETSHARE.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (share) { return share.share; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], MARKETSHARE.prototype, "share");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MARKETSHARE.prototype, "CO_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MARKETSHARE.prototype, "CO_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MARKETSHARE.prototype, "MARKET_VALUE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MARKETSHARE.prototype, "SHARES");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], MARKETSHARE.prototype, "MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MARKETSHARE.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MARKETSHARE.prototype, "UPDATED_BY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MARKETSHARE.prototype, "RELEASE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MARKETSHARE.prototype, "RELEASE_BY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MARKETSHARE.prototype, "SECURITY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MARKETSHARE.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (marketbranchcode) { return marketbranchcode.marketbranchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], MARKETSHARE.prototype, "marketbranchcode");
    MARKETSHARE = __decorate([
        (0, typeorm_1.Entity)()
    ], MARKETSHARE);
    return MARKETSHARE;
}());
exports.MARKETSHARE = MARKETSHARE;
