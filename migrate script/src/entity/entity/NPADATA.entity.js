"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NPADATA = void 0;
var typeorm_1 = require("typeorm");
var NPADATA = /** @class */ (function () {
    function NPADATA() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], NPADATA.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], NPADATA.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPADATA.prototype, "REPORT_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], NPADATA.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], NPADATA.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], NPADATA.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPADATA.prototype, "SECU_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPADATA.prototype, "AC_NPA_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPADATA.prototype, "AC_OPDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPADATA.prototype, "AC_EXPIRE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "AC_SANCTION_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "AC_SECURITY_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "LEDGER_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "OVERDUE_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "DUE_INSTALLMENT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "NPA_PROVISION_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "RECEIVABLE_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPADATA.prototype, "NPA_CLASS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPADATA.prototype, "NPA_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], NPADATA.prototype, "NPA_PERCENTAGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPADATA.prototype, "NPA_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPADATA.prototype, "SUB_CLASS_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPADATA.prototype, "OVERDUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "TOBE_RECOVER_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPADATA.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "UNSECURE_PROV_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "UNSECURE_PERCENTAGE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "PROV_ON_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "OVERDUE_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "CURRENT_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "AC_INSTALLMENT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPADATA.prototype, "AMT_TOBE_RECOVER");
    NPADATA = __decorate([
        (0, typeorm_1.Entity)()
    ], NPADATA);
    return NPADATA;
}());
exports.NPADATA = NPADATA;
