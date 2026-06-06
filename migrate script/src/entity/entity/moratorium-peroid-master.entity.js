"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MORATORIUMPERIOD = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var MORATORIUMPERIOD = /** @class */ (function () {
    function MORATORIUMPERIOD() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MORATORIUMPERIOD.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ "default": 'LN' })
    ], MORATORIUMPERIOD.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], MORATORIUMPERIOD.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], MORATORIUMPERIOD.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], MORATORIUMPERIOD.prototype, "INSTALLMENT_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], MORATORIUMPERIOD.prototype, "PERIOD");
    __decorate([
        (0, typeorm_1.Column)()
    ], MORATORIUMPERIOD.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], MORATORIUMPERIOD.prototype, "AC_RESO_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], MORATORIUMPERIOD.prototype, "AC_RESO_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], MORATORIUMPERIOD.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (moratoriumBranch) { return moratoriumBranch.moratoriumBranch; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], MORATORIUMPERIOD.prototype, "moratoriumBranch");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (moratoriumScheme) { return moratoriumScheme.moratoriumScheme; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], MORATORIUMPERIOD.prototype, "moratoriumScheme");
    MORATORIUMPERIOD = __decorate([
        (0, typeorm_1.Entity)()
    ], MORATORIUMPERIOD);
    return MORATORIUMPERIOD;
}());
exports.MORATORIUMPERIOD = MORATORIUMPERIOD;
