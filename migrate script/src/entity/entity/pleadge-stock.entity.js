"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PLEDGESTOCK = void 0;
var security_code_entity_1 = require("./security-code.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var PLEDGESTOCK = /** @class */ (function () {
    function PLEDGESTOCK() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PLEDGESTOCK.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLEDGESTOCK.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PLEDGESTOCK.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (pledge) { return pledge.pledge; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], PLEDGESTOCK.prototype, "pledge");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, "default": 0 })
    ], PLEDGESTOCK.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLEDGESTOCK.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (stock) { return stock.stock; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], PLEDGESTOCK.prototype, "stock");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLEDGESTOCK.prototype, "STORAGE_MEMO_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLEDGESTOCK.prototype, "STORAGE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PLEDGESTOCK.prototype, "GOODS_QTY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLEDGESTOCK.prototype, "MANUF_MILL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLEDGESTOCK.prototype, "DISCRIPTION");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PLEDGESTOCK.prototype, "BALANCE_QTY");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], PLEDGESTOCK.prototype, "RATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PLEDGESTOCK.prototype, "VALUE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLEDGESTOCK.prototype, "SECURITY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLEDGESTOCK.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (pleadgebranchcode) { return pleadgebranchcode.pleadgebranchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], PLEDGESTOCK.prototype, "pleadgebranchcode");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLEDGESTOCK.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLEDGESTOCK.prototype, "REMARK");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], PLEDGESTOCK.prototype, "MARGIN");
    PLEDGESTOCK = __decorate([
        (0, typeorm_1.Entity)()
    ], PLEDGESTOCK);
    return PLEDGESTOCK;
}());
exports.PLEDGESTOCK = PLEDGESTOCK;
