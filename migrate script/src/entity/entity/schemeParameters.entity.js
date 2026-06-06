"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SCHEMAST = void 0;
var ACDOCUMENTDETAILS_entity_1 = require("../../../../../../../../src/entity/entity/ACDOCUMENTDETAILS.entity");
var AGENTCHANGEHISTORY_entity_1 = require("../../../../../../../../src/entity/entity/AGENTCHANGEHISTORY.entity");
var CHEQUEBOOKISSUED_entity_1 = require("../../../../../../../../src/entity/entity/CHEQUEBOOKISSUED.entity");
var HISTORYTRAN_entity_1 = require("../../../../../../../../src/entity/entity/HISTORYTRAN.entity");
var dpmaster_entity_1 = require("../../../../../../../../src/entity/entity/dpmaster.entity");
var pgmaster_entity_1 = require("./pgmaster.entity");
var share_master_entity_1 = require("../../../../../../../../src/entity/entity/share-master.entity");
var term_loan_master_entity_1 = require("./term-loan-master.entity");
var deposit_intrest_rate_entity_1 = require("./deposit-intrest-rate.entity");
var interest_rate_for_loan_and_cc_entity_1 = require("./interest-rate-for-loan-and-cc.entity");
var interest_rate_for_term_deposit_entity_1 = require("./interest-rate-for-term-deposit.entity");
var pat_scheme_interest_rates_entity_1 = require("./pat-scheme-interest-rates.entity");
var premature_pigmy_less_int_rate_entity_1 = require("../../../../../../../../src/entity/entity/premature-pigmy-less-int-rate.entity");
var saving_and_pigmy_interest_rates_entity_1 = require("../../../../../../../../src/entity/entity/saving-and-pigmy-interest-rates.entity");
var company_group_master_entity_1 = require("./company-group-master.entity");
var interest_instruction_entity_1 = require("../../../../../../../../src/entity/entity/interest-instruction.entity");
var special_instruction_entity_1 = require("./special-instruction.entity");
var typeorm_1 = require("typeorm");
var pigmy_chart_entity_1 = require("./pigmy-chart.entity");
var standing_instruction_entity_1 = require("../../../../../../../../src/entity/entity/standing-instruction.entity");
var moratorium_peroid_master_entity_1 = require("../../../../../../../../src/entity/entity/moratorium-peroid-master.entity");
var book_debts_entity_1 = require("./book-debts.entity");
var CHARGESNOTING_entity_1 = require("./CHARGESNOTING.entity");
var gl_account_master_entity_1 = require("../../../../../../../../src/entity/entity/gl-account-master.entity");
var RENEWALHISTORY_entity_1 = require("../../../../../../../../src/entity/entity/RENEWALHISTORY.entity");
var own_deposits_entity_1 = require("../../../../../../../../src/entity/entity/own-deposits.entity");
var DEPOCLOSETRAN_entity_1 = require("../../../../../../../../src/entity/entity/DEPOCLOSETRAN.entity");
var DEPOCLOSETRANSAC_entity_1 = require("./DEPOCLOSETRANSAC.entity");
var fire_policy_entity_1 = require("../../../../../../../../src/entity/entity/fire-policy.entity");
var plant_and_machinery_entity_1 = require("../../../../../../../../src/entity/entity/plant-and-machinery.entity");
var market_shares_entity_1 = require("../../../../../../../../src/entity/entity/market-shares.entity");
var furniture_and_fixture_entity_1 = require("../../../../../../../../src/entity/entity/furniture-and-fixture.entity");
var vehicle_entity_1 = require("../../../../../../../../src/entity/entity/vehicle.entity");
var pleadge_stock_entity_1 = require("./pleadge-stock.entity");
var stock_statement_entity_1 = require("../../../../../../../../src/entity/entity/stock-statement.entity");
var land_and_buildings_entity_1 = require("../../../../../../../../src/entity/entity/land-and-buildings.entity");
var other_security_entity_1 = require("../../../../../../../../src/entity/entity/other-security.entity");
var govt_security_and_lic_entity_1 = require("../../../../../../../../src/entity/entity/govt-security-and-lic.entity");
var gold_and_silver_entity_1 = require("../../../../../../../../src/entity/entity/gold-and-silver.entity");
var customer_insurance_entity_1 = require("../../../../../../../../src/entity/entity/customer-insurance.entity");
var voucher_entity_1 = require("../../../../../../../../src/entity/entity/voucher.entity");
var SCHEMAST = /** @class */ (function () {
    function SCHEMAST() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SCHEMAST.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, unique: true })
    ], SCHEMAST.prototype, "S_APPL");
    __decorate([
        (0, typeorm_1.Column)({ length: 90, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_NAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 20, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_SHNAME");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_INT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_RECBL_PYBL_INT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_PENAL_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_RECBL_PENAL_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_RECBL_ODUE_INT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_OUTSTANDING_INT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_DEPO_LOAN");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SCHEMAST.prototype, "S_INT_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "POST_TO_INDIVIDUAL_AC");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_RECEIVABLE_INT_ALLOW");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_INT_ON_RECINT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_INT_ON_OTHERAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_INTUPTODATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_NO_POST_INT_AFT_OD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "INTEREST_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MIN_INT_LIMIT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_PENAL_INT_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_POST_PENAL_TO_AC");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "POST_PENALINT_IN_INTEREST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_REC_PENAL_APPL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_CAL_PENAL_AFTER_EXPIRY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_PENAL_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "PENAL_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_DUE_LIST_ALLOW");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "GRACE_PERIOD_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SCHEMAST.prototype, "MORATORIUM_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "STAND_INSTRUCTION_ALLOW");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "BALANCE_ADD_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_UNSECURED_LOAN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_OVERDUE_CHARGES_APPLY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MAX_LOAN_LMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "ROUNDOFF_FACTOR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "DEFAULT_LOAN_PERIOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_LOAN_PERIOD_LOCK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MIN_LOAN_PERIOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MAX_LOAN_PERIOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_INSTTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "INSTALLMENT_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_OVERDUE_ON_INSTALLMENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_SHOW_INT_AS_RECINT_IFDUEBAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MIN_DUE_INSTALLMENTS");
    __decorate([
        (0, typeorm_1.Column)({ length: 2, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_PRODUCT_DAY_BASE");
    __decorate([
        (0, typeorm_1.Column)({ length: 2, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_PRODUCT_DAY_BASE_END");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "CHEQUEBOOK_MIN_BAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "DORMANT_FLAG_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "OVERDRAFT_INTEREST_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "OVERDRAFT_INTEREST_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "GL_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_PAYABLE_INT_ALLOW");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_AUTO_CUT_INSTRUCTION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_ALLOW_SI_MINBAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "WITHDRAWAL_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_INTPAID_ON_CLOSING");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "PREMATURE_COMPOUND_INT");
    __decorate([
        (0, typeorm_1.Column)({ length: 6, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "PIGMY_MACHINE_SCHEME");
    __decorate([
        (0, typeorm_1.Column)({ length: 6, nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "SVR_CHARGE_GLCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "SVR_CHARGE_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_CASH_INT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "INTEREST_RULE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_RECURRING_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_CALLDEPOSIT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "REINVESTMENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_INTCALC_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "FIX_QUARTER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "QUARTER_PLUS_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "COMPOUND_INT_BASIS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "COMPOUND_INT_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_DISCOUNTED_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "INSTALLMENT_BASIS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_ASSUMED_INSTALLMENTS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "INSTALLMENT_COMPULSORY_IN_PAT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "DEPOSIT_PENAL_INT_CALC_DAY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_MATUCALC");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_CAL_MATURITY_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "FIXED_MATURITY_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "TRANSFER_TO_MATURE_DEPOSIT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_INTASON");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "PERIOD_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_AUTO_PERIOD_CALCULATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "UNIT_OF_PERIOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MIN_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MIN_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MULTIPLE_OF_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MULTIPLE_OF_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MULTIPLE_OF_MONTH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_INTPAID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "INT_INSTRUCTION_ALLOW");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "RECEIPT_NO_INPUT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "LESS_PREMATURE_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "LOCKER_RENT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "LOCKER_RECBL_RENT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "LOCKER_DEPOSIT_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_DAYBASE_INT_CALCULATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_INSTRUCTION_UPTO_MATURITY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MEMBER_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_AUTO_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "SHARES_FACE_VALUE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MAX_SHARES_LIMIT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "DIVIDEND_PERCENTAGE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SCHEMAST.prototype, "IS_ADD_BONUS_IN_DIVIDEND");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SCHEMAST.prototype, "INT_ROUND_OFF");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "SANCT_LIMIT_PERCENTAGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "RETIREMENT_YEARS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "SH_CERTIFICATE_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MATURED_BUT_NOT_PAID_GLAC");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_RENEWAL_ALLOW");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_INT_ON_DEPO_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_INTCALTP");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_PRODUCTUPTODATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_START_WITH_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_PRODUCT_BAL_BASE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_DAYSBASE_INSTRUCTION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "PREMATURE_ON_DEPOSIT_INST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "ALLOW_EXTRA_INSTALLMENTS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MATURE_GRACE_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MATURE_GRACE_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_AUTO_CUTTING");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MAX_DEP_LMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_TDS_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_INTADD_PRINCIPLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_STD_INSTR_UPTO_MATURITY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_ADD_PAYINT_IN_INSTRUCTION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "RECEIPT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "PREMATURE_INTRATE_ASPER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "AFTER_MATURE_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "TD_RECEIPT_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "MIN_BAL_FOR_INT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "ODPENALTY_ON_EXPIRED_LEDGERBAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_CAL_EXTRAPENAL_FOR_CC");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_GOLD_LOAN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_SINGLE_VOUCHER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_MULTY_VOUCHER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_CASH_PAID_MIN_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_CASH_PAID_LOCK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_LOCAL_CLEARING");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_CHEQUE_BOOK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_DEMAND_DRAFT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_PO_APPL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_TEMP_OVERDRFT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_PERIODCL_OVERDRFT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_SPECIAL_INSTRUCTION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_SUB_PRINT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_FREEZE_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "PROD_INTUPTODATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "S_INT_CR_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "IS_ZERO_BAL_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "INT_BASE_DAY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "INT_BASE_METHOD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], SCHEMAST.prototype, "SHOW_OVERDUEINT_IF_RECINTBAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMAST.prototype, "IS_RECOVERY_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMAST.prototype, "IS_ASK_RECOVERY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMAST.prototype, "RECOVERY_ACTYPE_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMAST.prototype, "RECOVERY_ACNO_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMAST.prototype, "RECOVERY_INST_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMAST.prototype, "RECOVERY_INTINST_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMAST.prototype, "RECOVERY_BALANCE_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMAST.prototype, "RECOVERY_RECEIVABLEINT_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMAST.prototype, "RECOVERY_TOTINST_FILED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMAST.prototype, "RECOVERY_PENALINT_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMAST.prototype, "RECOVERY_RECEPENALINT_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SCHEMAST.prototype, "IS_AUTO_TDRENEWAL_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SCHEMAST.prototype, "ADD_AMT_IN_PRINCIPLE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SCHEMAST.prototype, "ADD_AMT_IN_RECPAY");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SCHEMAST.prototype, "SMS_USE_SHNAME");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SCHEMAST.prototype, "ALLOW_ODREM_SMS");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SCHEMAST.prototype, "ALLOW_REM_SMS");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SCHEMAST.prototype, "ALLOW_SMS");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return dpmaster_entity_1.DPMASTER; }, function (DPschemecode) { return DPschemecode.DPMaster; }, {})
    ], SCHEMAST.prototype, "DPschemecode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pgmaster_entity_1.PGMASTER; }, function (PGschemecode) { return PGschemecode.PGMaster; }, {})
    ], SCHEMAST.prototype, "PGschemecode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return DEPOCLOSETRANSAC_entity_1.DEPOCLOSETRANSAC; }, function (depoCloseTranAc) { return depoCloseTranAc.depoCloseTranAc; }, {})
    ], SCHEMAST.prototype, "depoCloseTranAc");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return term_loan_master_entity_1.LNMASTER; }, function (lncccode) { return lncccode.LNCCMaster; }, {})
    ], SCHEMAST.prototype, "lncccode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return share_master_entity_1.SHMASTER; }, function (shareCode) { return shareCode.shareMaster; }, {})
    ], SCHEMAST.prototype, "shareCode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return RENEWALHISTORY_entity_1.RENEWALHISTORY; }, function (renewalHistory) { return renewalHistory.renewalHistory; }, {})
    ], SCHEMAST.prototype, "renewalHistory");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pigmy_chart_entity_1.PIGMYCHART; }, function (pigmyChart) { return pigmyChart.Scheme; }, {})
    ], SCHEMAST.prototype, "pigmyChart");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return HISTORYTRAN_entity_1.HISTORYTRAN; }, function (historyTran) { return historyTran.HistoryTran; }, {})
    ], SCHEMAST.prototype, "historyTran");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return HISTORYTRAN_entity_1.HISTORYTRAN; }, function (historyTranType) { return historyTranType.HistoryTranType; }, {})
    ], SCHEMAST.prototype, "historyTranType");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ACDOCUMENTDETAILS_entity_1.ACDOCUMENTDETAILS; }, function (acDocumentDetails) { return acDocumentDetails.acDocument; }, {})
    ], SCHEMAST.prototype, "acDocumentDetails");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return AGENTCHANGEHISTORY_entity_1.AGENTCHANGEHISTORY; }, function (agentChange) { return agentChange.agentChange; }, {})
    ], SCHEMAST.prototype, "agentChange");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return AGENTCHANGEHISTORY_entity_1.AGENTCHANGEHISTORY; }, function (agentACChange) { return agentACChange.agentACChange; }, {})
    ], SCHEMAST.prototype, "agentACChange");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return CHEQUEBOOKISSUED_entity_1.CHEQUEBOOKISSUED; }, function (chequeBook) { return chequeBook.chequeBook; }, {})
    ], SCHEMAST.prototype, "chequeBook");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return special_instruction_entity_1.SPECIALINSTRUCTION; }, function (specialIns) { return specialIns.specialIns; }, {})
    ], SCHEMAST.prototype, "specialIns");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return interest_instruction_entity_1.INTINSTRUCTION; }, function (interestDr) { return interestDr.interestDr; }, {})
    ], SCHEMAST.prototype, "interestDr");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return interest_instruction_entity_1.INTINSTRUCTION; }, function (interestCr) { return interestCr.interestCr; }, {})
    ], SCHEMAST.prototype, "interestCr");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return standing_instruction_entity_1.STANDINSTRUCTION; }, function (standingInsDr) { return standingInsDr.standingInsDr; }, {})
    ], SCHEMAST.prototype, "standingInsDr");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return standing_instruction_entity_1.STANDINSTRUCTION; }, function (standingInsCr) { return standingInsCr.standingInsCr; }, {})
    ], SCHEMAST.prototype, "standingInsCr");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return company_group_master_entity_1.COMPANYGROUPMASTER; }, function (scheme) { return scheme.company; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "scheme");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return interest_rate_for_term_deposit_entity_1.INTRATETD; }, function (irftd) { return irftd.scheme; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "irftd");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pat_scheme_interest_rates_entity_1.INTRATEPATSCHEMES; }, function (patscheme) { return patscheme.scheme; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "patscheme");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return saving_and_pigmy_interest_rates_entity_1.INTRATESBPG; }, function (sapint) { return sapint.scheme; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "sapint");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return interest_rate_for_loan_and_cc_entity_1.INTRATELOAN; }, function (intloancc) { return intloancc.scheme; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "intloancc");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return deposit_intrest_rate_entity_1.INTRATETDMULTI; }, function (depoint) { return depoint.scheme; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "depoint");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return premature_pigmy_less_int_rate_entity_1.PREMATULESSRATE; }, function (prepigmy) { return prepigmy.scheme; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "prepigmy");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return moratorium_peroid_master_entity_1.MORATORIUMPERIOD; }, function (moratoriumScheme) { return moratoriumScheme.moratoriumScheme; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "moratoriumScheme");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return CHARGESNOTING_entity_1.CHARGESNOTING; }, function (chargesScheme) { return chargesScheme.chargesScheme; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "chargesScheme");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return book_debts_entity_1.BOOKDEBTS; }, function (bookdebts) { return bookdebts.scheme; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "bookdebts");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return gl_account_master_entity_1.ACMASTER; }, function (glAcMaster) { return glAcMaster.glAcMaster; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "glAcMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return dpmaster_entity_1.DPMASTER; }, function (PGDPMaster) { return PGDPMaster.PGDPMaster; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "PGDPMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return own_deposits_entity_1.OWNDEPOSIT; }, function (depoactype) { return depoactype.depoactype; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "depoactype");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return DEPOCLOSETRAN_entity_1.DEPOCLOSETRAN; }, function (depocloseTran) { return depocloseTran.depocloseTran; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "depocloseTran");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return own_deposits_entity_1.OWNDEPOSIT; }, function (actypeowndepo) { return actypeowndepo.actypeowndepo; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "actypeowndepo");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return fire_policy_entity_1.FIREPOLICY; }, function (fireactype) { return fireactype.fireactype; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "fireactype");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return plant_and_machinery_entity_1.PLANTMACHINARY; }, function (plantmachinary) { return plantmachinary.plantmachinary; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "plantmachinary");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return market_shares_entity_1.MARKETSHARE; }, function (marketshare) { return marketshare.marketshare; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "marketshare");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return furniture_and_fixture_entity_1.FURNITURE; }, function (furniture) { return furniture.furniture; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "furniture");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return vehicle_entity_1.VEHICLE; }, function (vehicle) { return vehicle.vehicle; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "vehicle");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pleadge_stock_entity_1.PLEDGESTOCK; }, function (pledge) { return pledge.pledge; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "pledge");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return stock_statement_entity_1.STOCKSTATEMENT; }, function (stockstatement) { return stockstatement.stockstatement; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "stockstatement");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return land_and_buildings_entity_1.LANDBUILDING; }, function (land) { return land.land; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "land");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return other_security_entity_1.OTHERSECURITY; }, function (othersec) { return othersec.othersec; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "othersec");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return govt_security_and_lic_entity_1.GOVTSECULIC; }, function (govsec) { return govsec.govsec; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "govsec");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return gold_and_silver_entity_1.GOLDSILVER; }, function (goldsilver) { return goldsilver.goldsilver; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "goldsilver");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return customer_insurance_entity_1.SECINSURANCE; }, function (custinsurace) { return custinsurace.custinsurace; }, {
            cascade: ["insert", "update"]
        })
    ], SCHEMAST.prototype, "custinsurace");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return voucher_entity_1.DAILYTRAN; }, function (dailytranscheme) { return dailytranscheme.dailytranschemes; }, {})
    ], SCHEMAST.prototype, "dailytranscheme");
    SCHEMAST = __decorate([
        (0, typeorm_1.Entity)()
    ], SCHEMAST);
    return SCHEMAST;
}());
exports.SCHEMAST = SCHEMAST;
