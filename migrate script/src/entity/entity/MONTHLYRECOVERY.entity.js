"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MONTHLYRECOVERY = void 0;
var typeorm_1 = require("typeorm");
var MONTHLYRECOVERY = /** @class */ (function () {
    function MONTHLYRECOVERY() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MONTHLYRECOVERY.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], MONTHLYRECOVERY.prototype, "PROCESS_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], MONTHLYRECOVERY.prototype, "PROCESS_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "AC_RECOVERYID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], MONTHLYRECOVERY.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], MONTHLYRECOVERY.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "AC_SALARYDIVISION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "AC_SALARYDIVISIONNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_MEMBCONT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_MEMBCONT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MEMBCONT_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MEMBCONT_TOTINST");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MEMBCONT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_KALYANNIDHI");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_KAYAMTHEV_INST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_KAYAMTHEV_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_KAYAMTHEV_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_LOAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_LOAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_LOAN_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_LOAN_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_LOAN_INT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_LOAN_RECINT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_LOAN_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_EMRGLN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_EMRGLN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_EMRGLN_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_EMRGLN_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_EMRGLN_INT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_EMRGLN_RECINT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_EMRGLN_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_MEMRGLN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_MEMRGLN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MEMRGLN_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MEMRGLN_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MEMRGLN_INT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MEMRGLN_RECINT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MEMRGLN_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_HPLN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_HPLN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_HPLN_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_HPLN_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_HPLN_INT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_HPLN_RECINT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_HPLN_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_DPLN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_DPLN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_DPLN_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_DPLN_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_DPLN_INT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_DPLN_RECINT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_DPLN_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_GRAHLOAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_GRAHLOAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_GRAHLOAN_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_GRAHLOAN_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_GRAHLOAN_INT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_GRAHLOAN_RECINT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_GRAHLOAN_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_BLDGLN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_BLDGLN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_BLDGLN_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_BLDGLN_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_BLDGLN_INT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_BLDGLN_RECINT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_BLDGLN_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_SALARYLN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_SALARYLN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_SALARYLN_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_SALARYLN_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_SALARYLN_INT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_SALARYLN_RECINT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_SALARYLN_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_VHCLLN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_VHCLLN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_VHCLLN_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_VHCLLN_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_VHCLLN_INT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_VHCLLN_RECINT_AMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_VHCLLN_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MASIKTHEV_INST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_MASIKTHEVACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_MASIKTHEV_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_NO_OF_MASIKTHEVAC");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_SAVING_INST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_SAVINGACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_SAVING_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_ANAMAT_INST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_ANAMATACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_ANAMAT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_NO_OF_ANAMATAC");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "OTHER_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_OTHER1AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_OTHER1ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_OTHER2AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_OTHER2ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "POSTED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "AC_POSTING");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "AC_POST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "EMP_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_RECURRING_INST");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_UNICONT_INST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_UNICONT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_UNICONT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_UNICONT_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_RECURRING_INST_OTHER");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_SAVING_BAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "AC_SUBSALDIV");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_LOAN_RECPENAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_EMRGLN_RECPENAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MEMRGLN_RECPENAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_HPLN_RECPENAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_DPLN_RECPENAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_GRAHLOAN_RECPENAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_BLDGLN_RECPENAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_SALARYLN_RECPENAL");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_VHCLLN_RECPENAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_KALYANNIDHI_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_KALYANNIDHI_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_RECURRING_ACTYPE_OTHER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_RECURRING_ACNO_OTHER");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_KAYAMTHEV_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_UNICONT_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_RECURRING_PENAL_INT_OTHER");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MEMBCONT_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_MASIKTHEV_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERY.prototype, "T_RECURRING_PENAL_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI1_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI1_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI1_INST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI2_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI2_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI2_INST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI3_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI3_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI3_INST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI4_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI4_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERY.prototype, "T_NIDHI4_INST");
    MONTHLYRECOVERY = __decorate([
        (0, typeorm_1.Entity)()
    ], MONTHLYRECOVERY);
    return MONTHLYRECOVERY;
}());
exports.MONTHLYRECOVERY = MONTHLYRECOVERY;
