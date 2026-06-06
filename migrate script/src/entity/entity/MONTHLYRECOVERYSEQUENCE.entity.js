"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MONTHLYRECOVERYSEQUENCE = void 0;
var typeorm_1 = require("typeorm");
var MONTHLYRECOVERYSEQUENCE = /** @class */ (function () {
    function MONTHLYRECOVERYSEQUENCE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MONTHLYRECOVERYSEQUENCE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYSEQUENCE.prototype, "S_APPL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYSEQUENCE.prototype, "SEQ_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYSEQUENCE.prototype, "S_SHRNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYSEQUENCE.prototype, "RECOVERY_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYSEQUENCE.prototype, "RECOVERY_ACTYPE_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYSEQUENCE.prototype, "RECOVERY_ACNO_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYSEQUENCE.prototype, "IS_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYSEQUENCE.prototype, "ALLOW_EDITAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MONTHLYRECOVERYSEQUENCE.prototype, "ALLOW_EXTRAAMT");
    MONTHLYRECOVERYSEQUENCE = __decorate([
        (0, typeorm_1.Entity)()
    ], MONTHLYRECOVERYSEQUENCE);
    return MONTHLYRECOVERYSEQUENCE;
}());
exports.MONTHLYRECOVERYSEQUENCE = MONTHLYRECOVERYSEQUENCE;
