"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NOMINEELINK = void 0;
var city_master_entity_1 = require("./city-master.entity");
var typeorm_1 = require("typeorm");
var dpmaster_entity_1 = require("./dpmaster.entity");
var pgmaster_entity_1 = require("./pgmaster.entity");
var share_master_entity_1 = require("./share-master.entity");
var NOMINEELINK = /** @class */ (function () {
    function NOMINEELINK() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], NOMINEELINK.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_NNAME");
    __decorate([
        (0, typeorm_1.Column)()
    ], NOMINEELINK.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_NRELA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_NDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_NHONO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_NWARD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_NADDR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_NGALLI");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_NAREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_CITYNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_NCTCODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return city_master_entity_1.CITYMASTER; }, function (city) { return city.cityMasters; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_CTCODE" })
    ], NOMINEELINK.prototype, "city");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_NPIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "sharesID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return share_master_entity_1.SHMASTER; }, function (sharesId) { return sharesId.nomineeDetails; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "sharesID" })
    ], NOMINEELINK.prototype, "sharesId");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "DPMasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return dpmaster_entity_1.DPMASTER; }, function (dpmasterId) { return dpmasterId.nomineeDetails; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "DPMasterID" })
    ], NOMINEELINK.prototype, "dpmasterId");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "pigmyAID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return pgmaster_entity_1.PGMASTER; }, function (pigmyAccount) { return pigmyAccount.nomineeDetails; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "pigmyAID" })
    ], NOMINEELINK.prototype, "pgmasterId");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "BANKACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "ORA_AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NOMINEELINK.prototype, "REF_ID");
    NOMINEELINK = __decorate([
        (0, typeorm_1.Entity)()
    ], NOMINEELINK);
    return NOMINEELINK;
}());
exports.NOMINEELINK = NOMINEELINK;
