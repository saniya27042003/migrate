"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PLANTMACHINARY = void 0;
var security_code_entity_1 = require("./security-code.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var PLANTMACHINARY = /** @class */ (function () {
    function PLANTMACHINARY() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PLANTMACHINARY.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PLANTMACHINARY.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (plantmachinary) { return plantmachinary.plantmachinary; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], PLANTMACHINARY.prototype, "plantmachinary");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], PLANTMACHINARY.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (plant) { return plant.plant; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], PLANTMACHINARY.prototype, "plant");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "MACHINE_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "MACHINE_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "DISTINCTIVE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "SPECIFICATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "AQUISITION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], PLANTMACHINARY.prototype, "NEW_EQUIPEMENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "SUPPLIER_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PLANTMACHINARY.prototype, "PURCHASE_PRICE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], PLANTMACHINARY.prototype, "MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "SECURITY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PLANTMACHINARY.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (plantbranchcode) { return plantbranchcode.plantbranchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], PLANTMACHINARY.prototype, "plantbranchcode");
    PLANTMACHINARY = __decorate([
        (0, typeorm_1.Entity)()
    ], PLANTMACHINARY);
    return PLANTMACHINARY;
}());
exports.PLANTMACHINARY = PLANTMACHINARY;
