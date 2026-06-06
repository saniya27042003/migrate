"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VEHICLE = void 0;
var security_code_entity_1 = require("./security-code.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var VEHICLE = /** @class */ (function () {
    function VEHICLE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], VEHICLE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (vehicle) { return vehicle.vehicle; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], VEHICLE.prototype, "vehicle");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, "default": 0 })
    ], VEHICLE.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (vehiclesec) { return vehiclesec.vehiclesec; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], VEHICLE.prototype, "vehiclesec");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "RTO_REG_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "VEHICLE_MAKE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "MANUFACTURE_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "VEHICLE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "CHASSIS_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "NEW_VEHICLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "AQUISITION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "NEW_EQUIPEMENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "SUPPLIER_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], VEHICLE.prototype, "PURCHASE_PRICE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], VEHICLE.prototype, "MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "SECURITY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], VEHICLE.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (vehiclebranchcode) { return vehiclebranchcode.vehiclebranchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], VEHICLE.prototype, "vehiclebranchcode");
    VEHICLE = __decorate([
        (0, typeorm_1.Entity)()
    ], VEHICLE);
    return VEHICLE;
}());
exports.VEHICLE = VEHICLE;
