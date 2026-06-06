"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LNCCLOAN = void 0;
var typeorm_1 = require("typeorm");
var interest_rate_for_loan_and_cc_entity_1 = require("./interest-rate-for-loan-and-cc.entity");
var LNCCLOAN = /** @class */ (function () {
    function LNCCLOAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LNCCLOAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNCCLOAN.prototype, "FROM_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LNCCLOAN.prototype, "TO_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], LNCCLOAN.prototype, "INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], LNCCLOAN.prototype, "PENAL_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], LNCCLOAN.prototype, "idRateID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return interest_rate_for_loan_and_cc_entity_1.INTRATELOAN; }, function (idRate) { return idRate.rate; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idRateID" })
    ], LNCCLOAN.prototype, "idRate");
    LNCCLOAN = __decorate([
        (0, typeorm_1.Entity)()
    ], LNCCLOAN);
    return LNCCLOAN;
}());
exports.LNCCLOAN = LNCCLOAN;
