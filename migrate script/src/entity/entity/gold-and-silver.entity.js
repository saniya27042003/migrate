"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GOLDSILVER = void 0;
var security_code_entity_1 = require("./security-code.entity");
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var GOLDSILVER = /** @class */ (function () {
    function GOLDSILVER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], GOLDSILVER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], GOLDSILVER.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (goldsilver) { return goldsilver.goldsilver; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], GOLDSILVER.prototype, "goldsilver");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], GOLDSILVER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "SECU_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return security_code_entity_1.SECURITYMASTER; }, function (silvergold) { return silvergold.silvergold; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SECU_CODE" })
    ], GOLDSILVER.prototype, "silvergold");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "SUBMISSION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "ARTICLE_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "BAG_RECEIPT_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], GOLDSILVER.prototype, "TOTAL_VALUE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "NOMINEE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "NOMINEE_RELATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "RETURN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "ITEM_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 4, "default": 0 })
    ], GOLDSILVER.prototype, "TOTAL_WEIGHT_GMS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 4, "default": 0 })
    ], GOLDSILVER.prototype, "CLEAR_WEIGHT_GMS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 7, scale: 2, "default": 0 })
    ], GOLDSILVER.prototype, "RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "GOLD_BOX_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], GOLDSILVER.prototype, "MARGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "REMARK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "SECURITY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVER.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (goldsilverbranchcode) { return goldsilverbranchcode.goldsilverbranchcode; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], GOLDSILVER.prototype, "goldsilverbranchcode");
    GOLDSILVER = __decorate([
        (0, typeorm_1.Entity)()
    ], GOLDSILVER);
    return GOLDSILVER;
}());
exports.GOLDSILVER = GOLDSILVER;
