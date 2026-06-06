"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TERMINTRATE = void 0;
var typeorm_1 = require("typeorm");
var interest_rate_for_term_deposit_entity_1 = require("./interest-rate-for-term-deposit.entity");
var TERMINTRATE = /** @class */ (function () {
    function TERMINTRATE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TERMINTRATE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TERMINTRATE.prototype, "FROM_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TERMINTRATE.prototype, "FROM_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TERMINTRATE.prototype, "TO_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TERMINTRATE.prototype, "TO_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], TERMINTRATE.prototype, "INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], TERMINTRATE.prototype, "PENAL_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], TERMINTRATE.prototype, "idRateID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return interest_rate_for_term_deposit_entity_1.INTRATETD; }, function (idRate) { return idRate.rate; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idRateID" })
    ], TERMINTRATE.prototype, "idRate");
    TERMINTRATE = __decorate([
        (0, typeorm_1.Entity)()
    ], TERMINTRATE);
    return TERMINTRATE;
}());
exports.TERMINTRATE = TERMINTRATE;
