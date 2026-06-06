"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LNACINTRATE = void 0;
var typeorm_1 = require("typeorm");
var term_loan_master_entity_1 = require("./term-loan-master.entity");
var LNACINTRATE = /** @class */ (function () {
    function LNACINTRATE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LNACINTRATE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNACINTRATE.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'date' })
    ], LNACINTRATE.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], LNACINTRATE.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], LNACINTRATE.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], LNACINTRATE.prototype, "BANKACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNACINTRATE.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 1 })
    ], LNACINTRATE.prototype, "OPENING_ENTRY");
    __decorate([
        (0, typeorm_1.Column)({ "default": 1 })
    ], LNACINTRATE.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], LNACINTRATE.prototype, "INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], LNACINTRATE.prototype, "PENAL_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 1 })
    ], LNACINTRATE.prototype, "UPDATEFLAG");
    __decorate([
        (0, typeorm_1.Column)()
    ], LNACINTRATE.prototype, "LNMASTERID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return term_loan_master_entity_1.LNMASTER; }, function (termLoan) { return termLoan.termLoan; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "LNMASTERID" })
    ], LNACINTRATE.prototype, "termLoan");
    LNACINTRATE = __decorate([
        (0, typeorm_1.Entity)()
    ], LNACINTRATE);
    return LNACINTRATE;
}());
exports.LNACINTRATE = LNACINTRATE;
