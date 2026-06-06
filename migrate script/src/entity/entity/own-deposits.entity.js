"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OWNDEPOSIT = void 0;
var security_code_entity_1 = require("./security-code.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var OWNDEPOSIT = /** @class */ (function () {
    function OWNDEPOSIT() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], OWNDEPOSIT.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OWNDEPOSIT.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], OWNDEPOSIT.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (actypeowndepo) { return actypeowndepo.actypeowndepo; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], OWNDEPOSIT.prototype, "actypeowndepo");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0, length: 15 })
    ], OWNDEPOSIT.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OWNDEPOSIT.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (owndeposit) { return owndeposit.owndeposit; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], OWNDEPOSIT.prototype, "owndeposit");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OWNDEPOSIT.prototype, "DEPO_AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (depoactype) { return depoactype.depoactype; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "DEPO_AC_TYPE" })
    ], OWNDEPOSIT.prototype, "depoactype");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OWNDEPOSIT.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (deposit) { return deposit.deposit; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], OWNDEPOSIT.prototype, "deposit");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], OWNDEPOSIT.prototype, "DEPO_AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OWNDEPOSIT.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OWNDEPOSIT.prototype, "RECEIPT_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], OWNDEPOSIT.prototype, "DEPOSIT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OWNDEPOSIT.prototype, "REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OWNDEPOSIT.prototype, "MATURITY_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], OWNDEPOSIT.prototype, "MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], OWNDEPOSIT.prototype, "LEDGER_BAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OWNDEPOSIT.prototype, "AC_EXPIRE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": '0' })
    ], OWNDEPOSIT.prototype, "IS_LIEN_MARK_CLEAR");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], OWNDEPOSIT.prototype, "BALANCE_OF_LOAN_ACCOUNT");
    OWNDEPOSIT = __decorate([
        (0, typeorm_1.Entity)()
    ], OWNDEPOSIT);
    return OWNDEPOSIT;
}());
exports.OWNDEPOSIT = OWNDEPOSIT;
