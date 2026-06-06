"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IBCTRAN = void 0;
var typeorm_1 = require("typeorm");
var IBCTRAN = /** @class */ (function () {
    function IBCTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], IBCTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCTRAN.prototype, "TRAN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "HO_SUB_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCTRAN.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCTRAN.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCTRAN.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCTRAN.prototype, "DRAWEE_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "COLLECTION_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "COLLECTION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "EFFECTED_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "CHARGES_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)()
    ], IBCTRAN.prototype, "BANK_BRANCH_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "BANK_BRANCH_ADDRESS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "RETURN_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "DOC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], IBCTRAN.prototype, "DOC_REF_NO");
    IBCTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], IBCTRAN);
    return IBCTRAN;
}());
exports.IBCTRAN = IBCTRAN;
