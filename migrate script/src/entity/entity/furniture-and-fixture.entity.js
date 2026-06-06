"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FURNITURE = void 0;
var security_code_entity_1 = require("./security-code.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var FURNITURE = /** @class */ (function () {
    function FURNITURE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], FURNITURE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FURNITURE.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], FURNITURE.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (furniture) { return furniture.furniture; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], FURNITURE.prototype, "furniture");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], FURNITURE.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FURNITURE.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (furfixture) { return furfixture.furfixture; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], FURNITURE.prototype, "furfixture");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FURNITURE.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FURNITURE.prototype, "ARTICLE_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FURNITURE.prototype, "ARTICLE_MAKE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], FURNITURE.prototype, "NEW_ARTICLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FURNITURE.prototype, "AQUISITION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FURNITURE.prototype, "NEW_EQUIPEMENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FURNITURE.prototype, "SUPPLIER_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], FURNITURE.prototype, "PURCHASE_PRICE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], FURNITURE.prototype, "MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FURNITURE.prototype, "REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FURNITURE.prototype, "SECURITY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], FURNITURE.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (furniturebranchcode) { return furniturebranchcode.furniturebranchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], FURNITURE.prototype, "furniturebranchcode");
    FURNITURE = __decorate([
        (0, typeorm_1.Entity)()
    ], FURNITURE);
    return FURNITURE;
}());
exports.FURNITURE = FURNITURE;
