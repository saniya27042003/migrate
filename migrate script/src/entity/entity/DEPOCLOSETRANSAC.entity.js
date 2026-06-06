"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DEPOCLOSETRANSAC = void 0;
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var DEPOCLOSETRAN_entity_1 = require("./DEPOCLOSETRAN.entity");
var DEPOCLOSETRANSAC = /** @class */ (function () {
    function DEPOCLOSETRANSAC() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DEPOCLOSETRANSAC.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOCLOSETRANSAC.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOCLOSETRANSAC.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPOCLOSETRANSAC.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRANSAC.prototype, "TRANSFER_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRANSAC.prototype, "TRANSFER_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 15 })
    ], DEPOCLOSETRANSAC.prototype, "TRANSFER_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRANSAC.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRANSAC.prototype, "HO_SUB_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRANSAC.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRANSAC.prototype, "REC_PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRANSAC.prototype, "RECPAY_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRANSAC.prototype, "PENAL_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPOCLOSETRANSAC.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DEPOCLOSETRANSAC.prototype, "AC_CLOSED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEPOCLOSETRANSAC.prototype, "depoclosetran");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (depoCloseTranAc) { return depoCloseTranAc.depoCloseTranAc; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "TRANSFER_ACTYPE" })
    ], DEPOCLOSETRANSAC.prototype, "depoCloseTranAc");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return DEPOCLOSETRAN_entity_1.DEPOCLOSETRAN; }, function (depocloseTranNo) { return depocloseTranNo.depocloseTranNo; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "depoclosetran" })
    ], DEPOCLOSETRANSAC.prototype, "depocloseTranNo");
    DEPOCLOSETRANSAC = __decorate([
        (0, typeorm_1.Entity)()
    ], DEPOCLOSETRANSAC);
    return DEPOCLOSETRANSAC;
}());
exports.DEPOCLOSETRANSAC = DEPOCLOSETRANSAC;
