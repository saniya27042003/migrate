"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GUARANTERDETAILS = void 0;
var typeorm_1 = require("typeorm");
var term_loan_master_entity_1 = require("./term-loan-master.entity");
var GUARANTERDETAILS = /** @class */ (function () {
    function GUARANTERDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], GUARANTERDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], GUARANTERDETAILS.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GUARANTERDETAILS.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GUARANTERDETAILS.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GUARANTERDETAILS.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GUARANTERDETAILS.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GUARANTERDETAILS.prototype, "MEMBER_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GUARANTERDETAILS.prototype, "MEMBER_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GUARANTERDETAILS.prototype, "EXP_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GUARANTERDETAILS.prototype, "GAC_CUSTID");
    __decorate([
        (0, typeorm_1.Column)()
    ], GUARANTERDETAILS.prototype, "REF_ID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GUARANTERDETAILS.prototype, "lnmasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return term_loan_master_entity_1.LNMASTER; }, function (lnmaster) { return lnmaster.guaranterMaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "lnmasterID" })
    ], GUARANTERDETAILS.prototype, "lnmaster");
    GUARANTERDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], GUARANTERDETAILS);
    return GUARANTERDETAILS;
}());
exports.GUARANTERDETAILS = GUARANTERDETAILS;
