"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LANDBUILDING = void 0;
var security_code_entity_1 = require("./security-code.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var LANDBUILDING = /** @class */ (function () {
    function LANDBUILDING() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], LANDBUILDING.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (land) { return land.land; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], LANDBUILDING.prototype, "land");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], LANDBUILDING.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (landbuilding) { return landbuilding.landbuilding; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], LANDBUILDING.prototype, "landbuilding");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LANDBUILDING.prototype, "VALUE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "LOCATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "AREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "UNIT_AREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "AQUISITION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "NEW_EQUIPEMENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "SUPPLIER_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], LANDBUILDING.prototype, "PURCHASE_PRICE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], LANDBUILDING.prototype, "MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "SECURITY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "CITY_SURVEY_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "CITY_SURVEY_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "REG_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], LANDBUILDING.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (landbranchcode) { return landbranchcode.landbranchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], LANDBUILDING.prototype, "landbranchcode");
    LANDBUILDING = __decorate([
        (0, typeorm_1.Entity)()
    ], LANDBUILDING);
    return LANDBUILDING;
}());
exports.LANDBUILDING = LANDBUILDING;
