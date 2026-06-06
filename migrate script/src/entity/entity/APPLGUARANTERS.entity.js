"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.APPLGUARANTERS = void 0;
var city_master_entity_1 = require("./city-master.entity");
var typeorm_1 = require("typeorm");
var APPLGUARANTERS = /** @class */ (function () {
    function APPLGUARANTERS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], APPLGUARANTERS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], APPLGUARANTERS.prototype, "TRAN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], APPLGUARANTERS.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], APPLGUARANTERS.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], APPLGUARANTERS.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], APPLGUARANTERS.prototype, "MEMBER_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], APPLGUARANTERS.prototype, "MEMBER_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], APPLGUARANTERS.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], APPLGUARANTERS.prototype, "AC_ADDR1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], APPLGUARANTERS.prototype, "AC_ADDR2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], APPLGUARANTERS.prototype, "AC_ADDR3");
    __decorate([
        (0, typeorm_1.Column)()
    ], APPLGUARANTERS.prototype, "CTCODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return city_master_entity_1.CITYMASTER; }, function (cityCode) { return cityCode.cityCode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "CTCODE" })
    ], APPLGUARANTERS.prototype, "cityCode");
    APPLGUARANTERS = __decorate([
        (0, typeorm_1.Entity)()
    ], APPLGUARANTERS);
    return APPLGUARANTERS;
}());
exports.APPLGUARANTERS = APPLGUARANTERS;
