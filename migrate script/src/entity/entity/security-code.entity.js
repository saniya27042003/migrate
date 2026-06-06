"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SECURITYMASTER = void 0;
var book_debts_entity_1 = require("./book-debts.entity");
var customer_insurance_entity_1 = require("../../../../../../../../src/entity/entity/customer-insurance.entity");
var fire_policy_entity_1 = require("../../../../../../../../src/entity/entity/fire-policy.entity");
var furniture_and_fixture_entity_1 = require("../../../../../../../../src/entity/entity/furniture-and-fixture.entity");
var gold_and_silver_entity_1 = require("../../../../../../../../src/entity/entity/gold-and-silver.entity");
var govt_security_and_lic_entity_1 = require("../../../../../../../../src/entity/entity/govt-security-and-lic.entity");
var land_and_buildings_entity_1 = require("../../../../../../../../src/entity/entity/land-and-buildings.entity");
var market_shares_entity_1 = require("../../../../../../../../src/entity/entity/market-shares.entity");
var other_security_entity_1 = require("../../../../../../../../src/entity/entity/other-security.entity");
var own_deposits_entity_1 = require("../../../../../../../../src/entity/entity/own-deposits.entity");
var plant_and_machinery_entity_1 = require("../../../../../../../../src/entity/entity/plant-and-machinery.entity");
var pleadge_stock_entity_1 = require("./pleadge-stock.entity");
var stock_statement_entity_1 = require("../../../../../../../../src/entity/entity/stock-statement.entity");
var vehicle_entity_1 = require("../../../../../../../../src/entity/entity/vehicle.entity");
var typeorm_1 = require("typeorm");
var SECURITYMASTER = /** @class */ (function () {
    function SECURITYMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SECURITYMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], SECURITYMASTER.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECURITYMASTER.prototype, "SECU_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], SECURITYMASTER.prototype, "MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "FIRE_POLICY");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "MARKET_SHARE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "BOOK_DEBTS");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "PLEDGE_STOCK");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "STOCK_STATEMENT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "GOVT_SECU_LIC");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "PLANT_MACHINARY");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "FURNITURE_FIXTURE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "VEHICLE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "OWN_DEPOSIT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "LAND_BUILDING");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "GOLD_SILVER");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "OTHER_SECURITY");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], SECURITYMASTER.prototype, "CUST_INSURANCE");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return book_debts_entity_1.BOOKDEBTS; }, function (bookdebts) { return bookdebts.bookdebts; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "bookdebts");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return customer_insurance_entity_1.SECINSURANCE; }, function (custinsurance) { return custinsurance.custinsurance; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "custinsurance");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return fire_policy_entity_1.FIREPOLICY; }, function (firepolicy) { return firepolicy.firepolicy; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "firepolicy");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return furniture_and_fixture_entity_1.FURNITURE; }, function (furfixture) { return furfixture.furfixture; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "furfixture");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return gold_and_silver_entity_1.GOLDSILVER; }, function (silvergold) { return silvergold.silvergold; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "silvergold");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return govt_security_and_lic_entity_1.GOVTSECULIC; }, function (govtseclic) { return govtseclic.govtseclic; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "govtseclic");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return land_and_buildings_entity_1.LANDBUILDING; }, function (landbuilding) { return landbuilding.landbuilding; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "landbuilding");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return market_shares_entity_1.MARKETSHARE; }, function (share) { return share.share; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "share");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return other_security_entity_1.OTHERSECURITY; }, function (other) { return other.other; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "other");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return own_deposits_entity_1.OWNDEPOSIT; }, function (deposit) { return deposit.deposit; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "deposit");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return plant_and_machinery_entity_1.PLANTMACHINARY; }, function (plant) { return plant.plant; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "plant");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pleadge_stock_entity_1.PLEDGESTOCK; }, function (stock) { return stock.stock; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "stock");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return stock_statement_entity_1.STOCKSTATEMENT; }, function (stockstat) { return stockstat.stockstat; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "stockstat");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return vehicle_entity_1.VEHICLE; }, function (vehiclesec) { return vehiclesec.vehiclesec; }, {
            cascade: ["insert", "update"]
        })
    ], SECURITYMASTER.prototype, "vehiclesec");
    SECURITYMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], SECURITYMASTER);
    return SECURITYMASTER;
}());
exports.SECURITYMASTER = SECURITYMASTER;
