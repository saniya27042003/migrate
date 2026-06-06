"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SHARECAPITALAMTDETAILS = void 0;
var typeorm_1 = require("typeorm");
var system_master_parameters_entity_1 = require("./system-master-parameters.entity");
var SHARECAPITALAMTDETAILS = /** @class */ (function () {
    function SHARECAPITALAMTDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SHARECAPITALAMTDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARECAPITALAMTDETAILS.prototype, "FROM_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARECAPITALAMTDETAILS.prototype, "TO_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SHARECAPITALAMTDETAILS.prototype, "AMOUNT");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARECAPITALAMTDETAILS.prototype, "SYSID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return system_master_parameters_entity_1.SYSPARA; }, function (SYSPARAID) { return SYSPARAID.SYSPARAID; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "SYSID" })
    ], SHARECAPITALAMTDETAILS.prototype, "SYSPARAID");
    SHARECAPITALAMTDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], SHARECAPITALAMTDETAILS);
    return SHARECAPITALAMTDETAILS;
}());
exports.SHARECAPITALAMTDETAILS = SHARECAPITALAMTDETAILS;
