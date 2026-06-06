"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CHARGESNOTING = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var CHARGESNOTING = /** @class */ (function () {
    function CHARGESNOTING() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CHARGESNOTING.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHARGESNOTING.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHARGESNOTING.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHARGESNOTING.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], CHARGESNOTING.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHARGESNOTING.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHARGESNOTING.prototype, "AMOUNT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESNOTING.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESNOTING.prototype, "OTHER1_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESNOTING.prototype, "OTHER2_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESNOTING.prototype, "OTHER3_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESNOTING.prototype, "OTHER4_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESNOTING.prototype, "OTHER5_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESNOTING.prototype, "OTHER6_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESNOTING.prototype, "OTHER7_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESNOTING.prototype, "OTHER8_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESNOTING.prototype, "OTHER9_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESNOTING.prototype, "OTHER10_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHARGESNOTING.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHARGESNOTING.prototype, "GL_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHARGESNOTING.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHARGESNOTING.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], CHARGESNOTING.prototype, "SYSADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHARGESNOTING.prototype, "SYSADD_LOGIN");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], CHARGESNOTING.prototype, "SYSCHNG_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHARGESNOTING.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (chargesScheme) { return chargesScheme.chargesScheme; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "TRAN_ACTYPE" })
    ], CHARGESNOTING.prototype, "chargesScheme");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (notingChargeBranch) { return notingChargeBranch.notingChargeBranch; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], CHARGESNOTING.prototype, "notingChargeBranch");
    CHARGESNOTING = __decorate([
        (0, typeorm_1.Entity)()
    ], CHARGESNOTING);
    return CHARGESNOTING;
}());
exports.CHARGESNOTING = CHARGESNOTING;
