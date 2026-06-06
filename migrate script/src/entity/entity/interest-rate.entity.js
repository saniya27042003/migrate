"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INTRATE = void 0;
var typeorm_1 = require("typeorm");
var pat_scheme_interest_rates_entity_1 = require("./pat-scheme-interest-rates.entity");
var INTRATE = /** @class */ (function () {
    function INTRATE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INTRATE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], INTRATE.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTRATE.prototype, "MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], INTRATE.prototype, "DAYS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], INTRATE.prototype, "INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], INTRATE.prototype, "idRateID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return pat_scheme_interest_rates_entity_1.INTRATEPATSCHEMES; }, function (idRate) { return idRate.rate; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idRateID" })
    ], INTRATE.prototype, "idRate");
    INTRATE = __decorate([
        (0, typeorm_1.Entity)()
    ], INTRATE);
    return INTRATE;
}());
exports.INTRATE = INTRATE;
