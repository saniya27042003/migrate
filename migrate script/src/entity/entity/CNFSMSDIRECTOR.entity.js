"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CNFSMSDIRECTOR = void 0;
var typeorm_1 = require("typeorm");
var CNFSMSDIRECTOR = /** @class */ (function () {
    function CNFSMSDIRECTOR() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CNFSMSDIRECTOR.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "ENG_BANK_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "UNI_BANK_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "SMS_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "DIRECTOR_SMS_ALLOW");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "DIRECTOR_SMS_DAYEND");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "DIRECTOR_SMS_INTCAL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "DIRECTOR_SMS_LNEXP");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "DIRECTOR_SMS_LNEXP_PRD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "DIRECTOR_SMS_LNINST");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "DIRECTOR_SMS_LNINST_PRD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "DIRECTOR_SMS_GLPOSITION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "DIRECTOR_SMS_GLAC");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CNFSMSDIRECTOR.prototype, "DIRECTOR_SMS_GL_PRD");
    CNFSMSDIRECTOR = __decorate([
        (0, typeorm_1.Entity)()
    ], CNFSMSDIRECTOR);
    return CNFSMSDIRECTOR;
}());
exports.CNFSMSDIRECTOR = CNFSMSDIRECTOR;
