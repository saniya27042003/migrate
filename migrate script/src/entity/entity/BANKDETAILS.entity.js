"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BANKDETAILS = void 0;
var city_master_entity_1 = require("./city-master.entity");
var typeorm_1 = require("typeorm");
var BANKDETAILS = /** @class */ (function () {
    function BANKDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BANKDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], BANKDETAILS.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "TAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "PAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "FLAT_PRM_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "FLAT_PRM_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "RD_LANE_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "AREA_LOCATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "CITY_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "PIN_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "PHONE_OFFICE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "EMAIL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "SHORT_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "GST_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "SBI_BANKCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "MOB_NUM");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "STATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "HO_GL");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], BANKDETAILS.prototype, "IBT_TRAN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BANKDETAILS.prototype, "IFSC_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return city_master_entity_1.CITYMASTER; }, function (bankDetailCity) { return bankDetailCity.bankDetailCity; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "CITY_CODE" })
    ], BANKDETAILS.prototype, "bankDetailCity");
    BANKDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], BANKDETAILS);
    return BANKDETAILS;
}());
exports.BANKDETAILS = BANKDETAILS;
