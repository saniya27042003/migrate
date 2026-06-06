"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CHEQUELOCALTRAN = void 0;
var typeorm_1 = require("typeorm");
var CHEQUELOCALTRAN = /** @class */ (function () {
    function CHEQUELOCALTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CHEQUELOCALTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "TRAN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHEQUELOCALTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "CLEARING_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], CHEQUELOCALTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "BANK_BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "EFFECTED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "BOUNCE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "BOUNCE_USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "BOUNCE_OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "ENTRY_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUELOCALTRAN.prototype, "CLEARING_HOUSE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "HO_SUB_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "AUTO_CLG_TALLY_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "IS_MICR_CHEQUE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUELOCALTRAN.prototype, "TRAN_CODE");
    CHEQUELOCALTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], CHEQUELOCALTRAN);
    return CHEQUELOCALTRAN;
}());
exports.CHEQUELOCALTRAN = CHEQUELOCALTRAN;
