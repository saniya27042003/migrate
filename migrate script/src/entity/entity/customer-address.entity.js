"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CUSTOMERADDRESS = void 0;
var typeorm_1 = require("typeorm");
var city_master_entity_1 = require("./city-master.entity");
var CUSTOMERADDRESS = /** @class */ (function () {
    function CUSTOMERADDRESS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CUSTOMERADDRESS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CUSTOMERADDRESS.prototype, "AC_HONO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CUSTOMERADDRESS.prototype, "AC_WARD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CUSTOMERADDRESS.prototype, "AC_ADDR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CUSTOMERADDRESS.prototype, "AC_GALLI");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CUSTOMERADDRESS.prototype, "AC_AREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CUSTOMERADDRESS.prototype, "AC_CTCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CUSTOMERADDRESS.prototype, "idmasterID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CUSTOMERADDRESS.prototype, "AC_PIN");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], CUSTOMERADDRESS.prototype, "AC_ADDFLAG");
    __decorate([
        (0, typeorm_1.Column)({ "default": 'P' })
    ], CUSTOMERADDRESS.prototype, "AC_ADDTYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return city_master_entity_1.CITYMASTER; }, function (city) { return city.cityMaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_CTCODE" })
    ], CUSTOMERADDRESS.prototype, "city");
    CUSTOMERADDRESS = __decorate([
        (0, typeorm_1.Entity)()
    ], CUSTOMERADDRESS);
    return CUSTOMERADDRESS;
}());
exports.CUSTOMERADDRESS = CUSTOMERADDRESS;
