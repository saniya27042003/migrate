"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MONTHLYRECOVERYDDDETAILS = void 0;
var typeorm_1 = require("typeorm");
var MONTHLYRECOVERYDDDETAILS = /** @class */ (function () {
    function MONTHLYRECOVERYDDDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MONTHLYRECOVERYDDDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], MONTHLYRECOVERYDDDETAILS.prototype, "PROCESS_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], MONTHLYRECOVERYDDDETAILS.prototype, "PROCESS_MONTH");
    __decorate([
        (0, typeorm_1.Column)()
    ], MONTHLYRECOVERYDDDETAILS.prototype, "AC_SALARYDIVISION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYDDDETAILS.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYDDDETAILS.prototype, "CHEQUE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYDDDETAILS.prototype, "OW_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYDDDETAILS.prototype, "OW_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYDDDETAILS.prototype, "BANK_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], MONTHLYRECOVERYDDDETAILS.prototype, "COMM_AMT");
    MONTHLYRECOVERYDDDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], MONTHLYRECOVERYDDDETAILS);
    return MONTHLYRECOVERYDDDETAILS;
}());
exports.MONTHLYRECOVERYDDDETAILS = MONTHLYRECOVERYDDDETAILS;
