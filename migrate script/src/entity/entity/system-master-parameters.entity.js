"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SYSPARA = void 0;
var SHARECAPITALANTDETAILS_entity_1 = require("../../../../../../../../src/entity/entity/SHARECAPITALANTDETAILS.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var typeorm_1 = require("typeorm");
var SYSPARA = /** @class */ (function () {
    function SYSPARA() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SYSPARA.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "SYSPARA_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "BANK_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "SHORTBANK_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "ADDRESS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "MAX_CERTI_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "MAX_SHARES_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "CHAIRMAN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "ACCOUNTANT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "GENERAL_MANAGER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "COMPANY_START_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "NO_OF_EMPLOYEES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "OFFICER_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "OFFICER_DESIGNATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "RBI_LICENCE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "MANAGER_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "DD_COMMISSION_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "DIVIDEND_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "BONUS_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "CGST_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "SGST_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "IGST_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "BILL_RECEIVABLE_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "BILL_FOR_COLLECTION_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "BCBR_DR_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "BCBR_DR_SUB_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "CLG_SUSPENCE_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "INWARD_BILL_COLLECTION_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "INWARD_BILL_RECEIVABLE_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "RECOVERY_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_PROCESS_FOR_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_PROCESS_UPTO_TRANDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_ALLOW_CLG_TALLY_VOUCHER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_CLG_DATE_ADD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_AUTO_CLEARING_EFFECT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "AUTO_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "MASTER_APPROVAL_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_POSTING_DD_PREPARATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_AUTO_INSTRUCTION_PASS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "MAINTAIN_CHEQUE_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "PIGMY_IS_AUTO_VOUCHER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_MICR_CHARGES_APPL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_GURR_FROM_MEMBERS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_AUTOPOSTDAILY_OVERDRAFT_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "SCHMWISE_REC_IMPEXP");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "DENOMINATION_REQUIRE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "TELLER_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_ALLOW_SCHEME_GL_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "TOKEN_NO_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "MASTER_ATTACH_JOINT_NAMES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "MASTER_ATTACH_GUARDIAN_NAMES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "PIGMY_AC_RENEW_APPLY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_RECEIPTNO_IN_PIGMYCHART");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_REBIT_INTRATE_CAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_ALLOW_LOANINT_CHANGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_CONSIDER_CCRENEWAL_AS_OPEN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_ALLOW_RECOVERY_DIFF");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_TDS_CALCULATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_AUTO_VOUCHER_NPA_OIR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_HO_SUB_GLACNO_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_REQUIRE_CLEARING_OPTION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_ALLOW_USER_MULTI_LOGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_BANKERS_COMM_TRAN_REQD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_IBCIBR_VOUCH_REQD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "DEPRECIATION_WITH_HALFFULLRATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_AUTO_UPDATE_SHARES_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "ON_LINE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "IS_RECEIPT_PRINT_DESIGNMETHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "IS_ALLOW_RECOVERY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "RECOVERY_DR_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "HO_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "BG_DR_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "BG_CR_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "PAY_ORDER_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "INWARD_BILLS_PURCHASE_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "YEAR_CLOSING_TRANSFER_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "PL_TRANSFER_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "AUTHORIZED_SHARE_CAPITAL_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "TDS_PAYABLE_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "SURCHARGE_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "CHEQUE_CHARGES_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "CHEQUE_BOUNCE_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "CHEQUE_BOUNCE_CHARGES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "MICR_CHARGES_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "MICR_CHARGES_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "MICR_CHARGES_INWORD_CLG");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "GRACE_PERIOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "WEEKLY_HOLIDAY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "HALF_DAY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "INT_CALC_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "MORATORIUM_PERIOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "SANCTIONED_CASH_LIMIT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "IS_PGCOMMISSION_PERCALCULATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "DIV_CALCU_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "HIGH_VALUE_CLEARING_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "NPA_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "NPA_SUBMETHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "DIV_PAYABLE_FOR_LAST_YEARS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "MEMBER_FOR_GUR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "AUTO_LOCK_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "PASSWORD_EXPIRE_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "WITHDRW_CLOSING_FOR_GURMEMBERS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "PREVIOUS_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "CURRENT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "DAY_BEGIN_EXECUTED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "DAY_END_EXECUTED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "PIGMY_PREVIOUS_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "PIGMY_CURRENT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "PIGMY_DAY_BEGIN_EXECUTED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "PIGMY_DAY_END_EXECUTED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "BACK_DAY_OPTION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "CASH_IN_HAND_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "CLG_HOUSE_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "LINES_PER_PASSBOOKPAGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "PRODUCT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "NPA_BASE_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SYSPARA.prototype, "AUTO_INT_DEBIT_VOCHER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "PRODUCTWISE_INT_ROUND");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SYSPARA.prototype, "IS_ALLOW_OLD_LOAN_EDIT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SYSPARA.prototype, "ALLOW_AUTO_DAYEND_INTPOST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "SCHEMEWISE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SYSPARA.prototype, "PG_MACHINE_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SYSPARA.prototype, "IS_MONTHLY_INTPOST_APPLY_TO_LN");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SYSPARA.prototype, "ALLOW_AUTO_TD_RENEW_FACILITY");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SYSPARA.prototype, "ALLOW_SMS_FACILITY");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (branch) { return branch.id; }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], SYSPARA.prototype, "branch");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return SHARECAPITALANTDETAILS_entity_1.SHARECAPITALAMTDETAILS; }, function (SYSPARAID) { return SYSPARAID.SYSPARAID; }, {
            cascade: ["insert", "update"]
        })
    ], SYSPARA.prototype, "SYSPARAID");
    SYSPARA = __decorate([
        (0, typeorm_1.Entity)()
    ], SYSPARA);
    return SYSPARA;
}());
exports.SYSPARA = SYSPARA;
