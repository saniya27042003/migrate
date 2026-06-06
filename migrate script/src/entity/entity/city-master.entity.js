"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CITYMASTER = void 0;
var APPLGUARANTERS_entity_1 = require("../../../../../../../../src/entity/entity/APPLGUARANTERS.entity");
var BANKDETAILS_entity_1 = require("./BANKDETAILS.entity");
var nominee_entity_1 = require("./nominee.entity");
var typeorm_1 = require("typeorm");
var customer_address_entity_1 = require("./customer-address.entity");
var director_master_entity_1 = require("./director-master.entity");
var CITYMASTER = /** @class */ (function () {
    function CITYMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CITYMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
        // @Generated('increment')
    ], CITYMASTER.prototype, "CITY_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 100 })
    ], CITYMASTER.prototype, "CITY_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CITYMASTER.prototype, "DISTANCE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], CITYMASTER.prototype, "TALUKA_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], CITYMASTER.prototype, "DISTRICT_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], CITYMASTER.prototype, "STATE_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], CITYMASTER.prototype, "REGION_CODE");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return customer_address_entity_1.CUSTOMERADDRESS; }, function (cityMaster) { return cityMaster.city; }, {
            cascade: ["insert", "update"]
        })
    ], CITYMASTER.prototype, "cityMaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return nominee_entity_1.NOMINEELINK; }, function (cityMasters) { return cityMasters.city; }, {
            cascade: ["insert", "update"]
        })
    ], CITYMASTER.prototype, "cityMasters");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return director_master_entity_1.DIRECTORMASTER; }, function (castmast) { return castmast.directormaster; }, {
            cascade: ["insert", "update"]
        })
    ], CITYMASTER.prototype, "castmast");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return APPLGUARANTERS_entity_1.APPLGUARANTERS; }, function (cityCode) { return cityCode.cityCode; }, {
            cascade: ["insert", "update"]
        })
    ], CITYMASTER.prototype, "cityCode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return BANKDETAILS_entity_1.BANKDETAILS; }, function (bankDetailCity) { return bankDetailCity.bankDetailCity; }, {
            cascade: ["insert", "update"]
        })
    ], CITYMASTER.prototype, "bankDetailCity");
    CITYMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], CITYMASTER);
    return CITYMASTER;
}());
exports.CITYMASTER = CITYMASTER;
