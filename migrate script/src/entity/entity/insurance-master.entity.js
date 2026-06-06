"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INSUARANCEMASTER = void 0;
var customer_insurance_entity_1 = require("./customer-insurance.entity");
var fire_policy_entity_1 = require("./fire-policy.entity");
var typeorm_1 = require("typeorm");
var INSUARANCEMASTER = /** @class */ (function () {
    function INSUARANCEMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INSUARANCEMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], INSUARANCEMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], INSUARANCEMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return fire_policy_entity_1.FIREPOLICY; }, function (insurancemaster) { return insurancemaster.insurancemaster; }, {
            cascade: ["insert", "update"]
        })
    ], INSUARANCEMASTER.prototype, "insurancemaster");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return customer_insurance_entity_1.SECINSURANCE; }, function (custinsurancemaster) { return custinsurancemaster.custinsurancemaster; }, {
            cascade: ["insert", "update"]
        })
    ], INSUARANCEMASTER.prototype, "custinsurancemaster");
    INSUARANCEMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], INSUARANCEMASTER);
    return INSUARANCEMASTER;
}());
exports.INSUARANCEMASTER = INSUARANCEMASTER;
