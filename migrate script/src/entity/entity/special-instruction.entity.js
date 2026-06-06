"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SPECIALINSTRUCTION = void 0;
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var SPECIALINSTRUCTION = /** @class */ (function () {
    function SPECIALINSTRUCTION() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SPECIALINSTRUCTION.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], SPECIALINSTRUCTION.prototype, "INSTRUCTION_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], SPECIALINSTRUCTION.prototype, "INSTRUCTION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SPECIALINSTRUCTION.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SPECIALINSTRUCTION.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SPECIALINSTRUCTION.prototype, "DRCR_APPLY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SPECIALINSTRUCTION.prototype, "DETAILS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SPECIALINSTRUCTION.prototype, "FROM_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SPECIALINSTRUCTION.prototype, "TO_DATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": '0' })
    ], SPECIALINSTRUCTION.prototype, "IS_RESTRICT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SPECIALINSTRUCTION.prototype, "REVOKE_DATE");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], SPECIALINSTRUCTION.prototype, "SYSADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SPECIALINSTRUCTION.prototype, "SYSADD_LOGIN");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], SPECIALINSTRUCTION.prototype, "SYSCHNG_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SPECIALINSTRUCTION.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (specialIns) { return specialIns.specialIns; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "TRAN_ACTYPE" })
    ], SPECIALINSTRUCTION.prototype, "specialIns");
    SPECIALINSTRUCTION = __decorate([
        (0, typeorm_1.Entity)()
    ], SPECIALINSTRUCTION);
    return SPECIALINSTRUCTION;
}());
exports.SPECIALINSTRUCTION = SPECIALINSTRUCTION;
