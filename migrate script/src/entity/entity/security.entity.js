"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SECURITYDETAILS = void 0;
var typeorm_1 = require("typeorm");
var term_loan_master_entity_1 = require("./term-loan-master.entity");
var SECURITYDETAILS = /** @class */ (function () {
    function SECURITYDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SECURITYDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECURITYDETAILS.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECURITYDETAILS.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], SECURITYDETAILS.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], SECURITYDETAILS.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SECURITYDETAILS.prototype, "SECURITY_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SECURITYDETAILS.prototype, "SECURITY_VALUE");
    __decorate([
        (0, typeorm_1.Column)()
    ], SECURITYDETAILS.prototype, "lnmasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return term_loan_master_entity_1.LNMASTER; }, function (lnmaster) { return lnmaster.securityMaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "lnmasterID" })
    ], SECURITYDETAILS.prototype, "lnmaster");
    SECURITYDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], SECURITYDETAILS);
    return SECURITYDETAILS;
}());
exports.SECURITYDETAILS = SECURITYDETAILS;
