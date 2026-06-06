"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AUTHORITYMASTER = void 0;
var term_loan_master_entity_1 = require("./term-loan-master.entity");
var typeorm_1 = require("typeorm");
var AUTHORITYMASTER = /** @class */ (function () {
    function AUTHORITYMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], AUTHORITYMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], AUTHORITYMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], AUTHORITYMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return term_loan_master_entity_1.LNMASTER; }, function (authority) { return authority.authority; }, {
            cascade: ["insert", "update"]
        })
    ], AUTHORITYMASTER.prototype, "authority");
    AUTHORITYMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], AUTHORITYMASTER);
    return AUTHORITYMASTER;
}());
exports.AUTHORITYMASTER = AUTHORITYMASTER;
