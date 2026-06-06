"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OWNBRANCHMASTER = void 0;
var BANKBRANCHMASTER_entity_1 = require("./BANKBRANCHMASTER.entity");
var BATCHVOUCHERTRAN_entity_1 = require("./BATCHVOUCHERTRAN.entity");
var BRANCHWISEDIVIDEND_entity_1 = require("./BRANCHWISEDIVIDEND.entity");
var CASHREMITRAN_entity_1 = require("./CASHREMITRAN.entity");
var CHEQUEBOOKISSUED_entity_1 = require("./CHEQUEBOOKISSUED.entity");
var CHEQUECOLLECTTRAN_entity_1 = require("./CHEQUECOLLECTTRAN.entity");
var dead_stock_master_entity_1 = require("./dead-stock-master.entity");
var dpmaster_entity_1 = require("./dpmaster.entity");
var pgmaster_entity_1 = require("./pgmaster.entity");
var share_master_entity_1 = require("./share-master.entity");
var term_loan_master_entity_1 = require("./term-loan-master.entity");
var gl_account_master_entity_1 = require("./gl-account-master.entity");
var moratorium_peroid_master_entity_1 = require("./moratorium-peroid-master.entity");
var CHARGESNOTING_entity_1 = require("./CHARGESNOTING.entity");
var book_debts_entity_1 = require("./book-debts.entity");
var customer_insurance_entity_1 = require("./customer-insurance.entity");
var fire_policy_entity_1 = require("./fire-policy.entity");
var furniture_and_fixture_entity_1 = require("./furniture-and-fixture.entity");
var gold_and_silver_entity_1 = require("./gold-and-silver.entity");
var govt_security_and_lic_entity_1 = require("./govt-security-and-lic.entity");
var land_and_buildings_entity_1 = require("./land-and-buildings.entity");
var market_shares_entity_1 = require("./market-shares.entity");
var other_security_entity_1 = require("./other-security.entity");
var own_deposits_entity_1 = require("./own-deposits.entity");
var plant_and_machinery_entity_1 = require("./plant-and-machinery.entity");
var pleadge_stock_entity_1 = require("./pleadge-stock.entity");
var stock_statement_entity_1 = require("./stock-statement.entity");
var vehicle_entity_1 = require("./vehicle.entity");
var pigmy_chart_entity_1 = require("./pigmy-chart.entity");
var system_master_parameters_entity_1 = require("./system-master-parameters.entity");
var user_defination_entity_1 = require("../../../../../../../../src/utility/user-defination/entity/user-defination.entity");
var typeorm_1 = require("typeorm");
var interest_instruction_entity_1 = require("./interest-instruction.entity");
var company_group_link_master_entity_1 = require("./company-group-link-master.entity");
var company_group_master_entity_1 = require("./company-group-master.entity");
var depriciation_category_master_entity_1 = require("./depriciation-category-master.entity");
var director_master_entity_1 = require("./director-master.entity");
var locker_rack_master_entity_1 = require("./locker-rack-master.entity");
var locker_rackwise_master_entity_1 = require("./locker-rackwise-master.entity");
var locker_size_master_entity_1 = require("./locker-size-master.entity");
var salary_division_master_entity_1 = require("./salary-division-master.entity");
var sub_salary_division_master_entity_1 = require("./sub-salary-division-master.entity");
var OWNBRANCHMASTER = /** @class */ (function () {
    function OWNBRANCHMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], OWNBRANCHMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], OWNBRANCHMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], OWNBRANCHMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return user_defination_entity_1.USERDEFINATION; }, function (user) { return user.branch; })
    ], OWNBRANCHMASTER.prototype, "user");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OWNBRANCHMASTER.prototype, "sysparaId");
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return system_master_parameters_entity_1.SYSPARA; }, function (syspara) { return syspara.branch; })
    ], OWNBRANCHMASTER.prototype, "syspara");
    __decorate([
        (0, typeorm_1.OneToMany)(function (type) { return dpmaster_entity_1.DPMASTER; }, function (branchcode) { return branchcode.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "branchcode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return dpmaster_entity_1.DPMASTER; }, function (branch) { return branch.BranchMaster; })
    ], OWNBRANCHMASTER.prototype, "BranchMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pgmaster_entity_1.PGMASTER; }, function (branchCodePG) { return branchCodePG.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "branchCodePG");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return share_master_entity_1.SHMASTER; }, function (branchCodesh) { return branchCodesh.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "branchCodesh");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return dead_stock_master_entity_1.ITEMMASTER; }, function (branchCodeds) { return branchCodeds.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "branchCodeds");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return term_loan_master_entity_1.LNMASTER; }, function (branchCodeLN) { return branchCodeLN.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "branchCodeLN");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return share_master_entity_1.SHMASTER; }, function (divBranch) { return divBranch.divBranchMaster; })
    ], OWNBRANCHMASTER.prototype, "divBranch");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pigmy_chart_entity_1.PIGMYCHART; }, function (branchCodePigmyChart) { return branchCodePigmyChart.BranchCode; })
    ], OWNBRANCHMASTER.prototype, "branchCodePigmyChart");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], OWNBRANCHMASTER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return gl_account_master_entity_1.ACMASTER; }, function (accNo) { return accNo.ownBranch; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_NO" })
    ], OWNBRANCHMASTER.prototype, "accNo");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return interest_instruction_entity_1.INTINSTRUCTION; }, function (branchCodeIns) { return branchCodeIns.BranchCode; })
    ], OWNBRANCHMASTER.prototype, "branchCodeIns");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return salary_division_master_entity_1.SALARYDIVISIONMASTER; }, function (salarydiv) { return salarydiv.branch; }, {
            cascade: ["insert", "update"]
        })
    ], OWNBRANCHMASTER.prototype, "salarydiv");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return BANKBRANCHMASTER_entity_1.BANKBRANCHMASTER; }, function (BBranchMaster) { return BBranchMaster.BBranchMaster; })
    ], OWNBRANCHMASTER.prototype, "BBranchMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return BATCHVOUCHERTRAN_entity_1.BATCHVOUCHERTRAN; }, function (voucherBranch) { return voucherBranch.voucherBranch; })
    ], OWNBRANCHMASTER.prototype, "voucherBranch");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return BRANCHWISEDIVIDEND_entity_1.BRANCHWISEDIVIDEND; }, function (branchDividend) { return branchDividend.branchDividend; })
    ], OWNBRANCHMASTER.prototype, "branchDividend");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return CASHREMITRAN_entity_1.CASHREMITRAN; }, function (cashTran) { return cashTran.cashTran; })
    ], OWNBRANCHMASTER.prototype, "cashTran");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return CHEQUEBOOKISSUED_entity_1.CHEQUEBOOKISSUED; }, function (chequebook) { return chequebook.chequebook; })
    ], OWNBRANCHMASTER.prototype, "chequebook");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return CHEQUECOLLECTTRAN_entity_1.CHEQUECOLLECTTRAN; }, function (chequeCollection) { return chequeCollection.chequeCollection; })
    ], OWNBRANCHMASTER.prototype, "chequeCollection");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return moratorium_peroid_master_entity_1.MORATORIUMPERIOD; }, function (moratoriumBranch) { return moratoriumBranch.moratoriumBranch; })
    ], OWNBRANCHMASTER.prototype, "moratoriumBranch");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return CHARGESNOTING_entity_1.CHARGESNOTING; }, function (notingChargeBranch) { return notingChargeBranch.notingChargeBranch; })
    ], OWNBRANCHMASTER.prototype, "notingChargeBranch");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return director_master_entity_1.DIRECTORMASTER; }, function (director) { return director.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "director");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return locker_rack_master_entity_1.LOCKERRACKMASTER; }, function (locker) { return locker.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "locker");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return locker_size_master_entity_1.LOCKERSIZE; }, function (lockersize) { return lockersize.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "lockersize");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return locker_rackwise_master_entity_1.LOCKERMASTER; }, function (lockerwise) { return lockerwise.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "lockerwise");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return depriciation_category_master_entity_1.DEPRCATEGORY; }, function (depre) { return depre.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "depre");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return sub_salary_division_master_entity_1.SUBSALARYMASTER; }, function (subsal) { return subsal.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "subsal");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return company_group_master_entity_1.COMPANYGROUPMASTER; }, function (comapny) { return comapny.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "comapny");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return company_group_link_master_entity_1.COMPANYGROUPLINKMASTER; }, function (comapnylink) { return comapnylink.BranchCodeMaster; })
    ], OWNBRANCHMASTER.prototype, "comapnylink");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return own_deposits_entity_1.OWNDEPOSIT; }, function (owndeposit) { return owndeposit.owndeposit; })
    ], OWNBRANCHMASTER.prototype, "owndeposit");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return fire_policy_entity_1.FIREPOLICY; }, function (firebranchcode) { return firebranchcode.firebranchcode; })
    ], OWNBRANCHMASTER.prototype, "firebranchcode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return book_debts_entity_1.BOOKDEBTS; }, function (bookbrach) { return bookbrach.bookbrach; })
    ], OWNBRANCHMASTER.prototype, "bookbrach");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return customer_insurance_entity_1.SECINSURANCE; }, function (secinsubranch) { return secinsubranch.secinsubranch; })
    ], OWNBRANCHMASTER.prototype, "secinsubranch");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return furniture_and_fixture_entity_1.FURNITURE; }, function (furniturebranchcode) { return furniturebranchcode.furniturebranchcode; })
    ], OWNBRANCHMASTER.prototype, "furniturebranchcode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return gold_and_silver_entity_1.GOLDSILVER; }, function (goldsilverbranchcode) { return goldsilverbranchcode.goldsilverbranchcode; })
    ], OWNBRANCHMASTER.prototype, "goldsilverbranchcode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return govt_security_and_lic_entity_1.GOVTSECULIC; }, function (govtsecbranchcode) { return govtsecbranchcode.govtsecbranchcode; })
    ], OWNBRANCHMASTER.prototype, "govtsecbranchcode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return land_and_buildings_entity_1.LANDBUILDING; }, function (landbranchcode) { return landbranchcode.landbranchcode; })
    ], OWNBRANCHMASTER.prototype, "landbranchcode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return market_shares_entity_1.MARKETSHARE; }, function (marketbranchcode) { return marketbranchcode.marketbranchcode; })
    ], OWNBRANCHMASTER.prototype, "marketbranchcode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return other_security_entity_1.OTHERSECURITY; }, function (othersecbranchcode) { return othersecbranchcode.othersecbranchcode; })
    ], OWNBRANCHMASTER.prototype, "othersecbranchcode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return plant_and_machinery_entity_1.PLANTMACHINARY; }, function (plantbranchcode) { return plantbranchcode.plantbranchcode; })
    ], OWNBRANCHMASTER.prototype, "plantbranchcode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pleadge_stock_entity_1.PLEDGESTOCK; }, function (pleadgebranchcode) { return pleadgebranchcode.pleadgebranchcode; })
    ], OWNBRANCHMASTER.prototype, "pleadgebranchcode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return stock_statement_entity_1.STOCKSTATEMENT; }, function (stockbranchcode) { return stockbranchcode.stockbranchcode; })
    ], OWNBRANCHMASTER.prototype, "stockbranchcode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return vehicle_entity_1.VEHICLE; }, function (vehiclebranchcode) { return vehiclebranchcode.vehiclebranchcode; })
    ], OWNBRANCHMASTER.prototype, "vehiclebranchcode");
    OWNBRANCHMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], OWNBRANCHMASTER);
    return OWNBRANCHMASTER;
}());
exports.OWNBRANCHMASTER = OWNBRANCHMASTER;
