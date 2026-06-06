"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DEADSTOCKHEADER = void 0;
var typeorm_1 = require("typeorm");
var DEADSTOCKDETAIL_entity_1 = require("./DEADSTOCKDETAIL.entity");
var DEADSTOCKHEADER = /** @class */ (function () {
    function DEADSTOCKHEADER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DEADSTOCKHEADER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEADSTOCKHEADER.prototype, "TRAN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEADSTOCKHEADER.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], DEADSTOCKHEADER.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEADSTOCKHEADER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEADSTOCKHEADER.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEADSTOCKHEADER.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEADSTOCKHEADER.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEADSTOCKHEADER.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "TRANSFER_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "TRANSFER_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "TRANSFER_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "HO_SUB_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "TRAN_SUPPLIER_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "SUPPLIER_BILL_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "SUPPLIER_BILL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "RESO_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "RESO_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DEADSTOCKHEADER.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEADSTOCKHEADER.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEADSTOCKHEADER.prototype, "CGST_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEADSTOCKHEADER.prototype, "SGST_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEADSTOCKHEADER.prototype, "IGST_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "GST_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKHEADER.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 1 })
    ], DEADSTOCKHEADER.prototype, "status");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return DEADSTOCKDETAIL_entity_1.DEADSTOCKDETAIL; }, function (deadstockHead) { return deadstockHead.deadstockHead; })
    ], DEADSTOCKHEADER.prototype, "deadstockHead");
    DEADSTOCKHEADER = __decorate([
        (0, typeorm_1.Entity)()
    ], DEADSTOCKHEADER);
    return DEADSTOCKHEADER;
}());
exports.DEADSTOCKHEADER = DEADSTOCKHEADER;
