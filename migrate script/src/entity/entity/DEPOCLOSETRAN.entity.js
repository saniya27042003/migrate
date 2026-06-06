"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DEPOCLOSETRAN = void 0;
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var DEPOCLOSETRANSAC_entity_1 = require("./DEPOCLOSETRANSAC.entity");
var DEPOCLOSETRAN = /** @class */ (function () {
    function DEPOCLOSETRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DEPOCLOSETRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOCLOSETRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOCLOSETRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOCLOSETRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOCLOSETRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOCLOSETRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], DEPOCLOSETRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "LEDGER_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "EXCESS_INT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "TDS_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "SURCHARGE_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "COMMISSION_CHARGES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "COMMISSION_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "OTHER_CHARGES_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "OTHER_CHARGES_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "PENAL_INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "PAID_INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "NET_INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "UNPAID_CASHINT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "TOTAL_INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "NET_PAYABLE_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "INTEREST_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "IS_PREMATURE_CLOSE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DEPOCLOSETRAN.prototype, "TOKEN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "PAYABLE_INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "AUTO_MATURED_PAYABLEAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "AFT_MATURE_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRAN.prototype, "AFT_MATURE_INT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], DEPOCLOSETRAN.prototype, "SYSADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "SYSADD_LOGIN");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], DEPOCLOSETRAN.prototype, "SYSCHNG_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRAN.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 1 })
    ], DEPOCLOSETRAN.prototype, "status");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return DEPOCLOSETRANSAC_entity_1.DEPOCLOSETRANSAC; }, function (depocloseTranNo) { return depocloseTranNo.depocloseTranNo; })
    ], DEPOCLOSETRAN.prototype, "depocloseTranNo");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (depocloseTran) { return depocloseTran.depocloseTran; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "TRAN_ACTYPE" })
    ], DEPOCLOSETRAN.prototype, "depocloseTran");
    DEPOCLOSETRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], DEPOCLOSETRAN);
    return DEPOCLOSETRAN;
}());
exports.DEPOCLOSETRAN = DEPOCLOSETRAN;
