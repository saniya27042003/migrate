"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INTMULTI = void 0;
var typeorm_1 = require("typeorm");
var deposit_intrest_rate_entity_1 = require("./deposit-intrest-rate.entity");
var INTMULTI = /** @class */ (function () {
    function INTMULTI() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INTMULTI.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], INTMULTI.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTMULTI.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTMULTI.prototype, "INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], INTMULTI.prototype, "idRateID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return deposit_intrest_rate_entity_1.INTRATETDMULTI; }, function (idRate) { return idRate.rate; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idRateID" })
    ], INTMULTI.prototype, "idRate");
    INTMULTI = __decorate([
        (0, typeorm_1.Entity)()
    ], INTMULTI);
    return INTMULTI;
}());
exports.INTMULTI = INTMULTI;
