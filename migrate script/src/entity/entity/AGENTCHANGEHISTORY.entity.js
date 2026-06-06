"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AGENTCHANGEHISTORY = void 0;
var typeorm_1 = require("typeorm");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var AGENTCHANGEHISTORY = /** @class */ (function () {
    function AGENTCHANGEHISTORY() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], AGENTCHANGEHISTORY.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], AGENTCHANGEHISTORY.prototype, "CHANGE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], AGENTCHANGEHISTORY.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], AGENTCHANGEHISTORY.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], AGENTCHANGEHISTORY.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], AGENTCHANGEHISTORY.prototype, "AGENT_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], AGENTCHANGEHISTORY.prototype, "AGENT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], AGENTCHANGEHISTORY.prototype, "AGENT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], AGENTCHANGEHISTORY.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], AGENTCHANGEHISTORY.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], AGENTCHANGEHISTORY.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], AGENTCHANGEHISTORY.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (agentChange) { return agentChange.agentChange; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], AGENTCHANGEHISTORY.prototype, "agentChange");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (agentACChange) { return agentACChange.agentACChange; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AGENT_ACTYPE" })
    ], AGENTCHANGEHISTORY.prototype, "agentACChange");
    AGENTCHANGEHISTORY = __decorate([
        (0, typeorm_1.Entity)()
    ], AGENTCHANGEHISTORY);
    return AGENTCHANGEHISTORY;
}());
exports.AGENTCHANGEHISTORY = AGENTCHANGEHISTORY;
