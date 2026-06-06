"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SCHEMDATA = void 0;
var typeorm_1 = require("typeorm");
var SCHEMDATA = /** @class */ (function () {
    function SCHEMDATA() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SCHEMDATA.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], SCHEMDATA.prototype, "S_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_LOCAL_CLEARING");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_CHEQUE_BOOK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_TEMP_OVERDRFT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_PERIODCL_OVERDRFT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_SPECIAL_INSTRUCTION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_SINGLE_VOUCHER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_MULTY_VOUCHER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_DEMAND_DRAFT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_FREEZE_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_CASH_PAID_MIN_AMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "IS_PO_APPL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_SUB_PRINT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMDATA.prototype, "S_CASH_PAID_LOCK");
    SCHEMDATA = __decorate([
        (0, typeorm_1.Entity)()
    ], SCHEMDATA);
    return SCHEMDATA;
}());
exports.SCHEMDATA = SCHEMDATA;
