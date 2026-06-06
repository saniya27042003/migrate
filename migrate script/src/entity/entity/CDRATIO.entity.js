"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CDRATIO = void 0;
var typeorm_1 = require("typeorm");
var CDRATIO = /** @class */ (function () {
    function CDRATIO() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CDRATIO.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CDRATIO.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], CDRATIO.prototype, "STATUS_DP");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], CDRATIO.prototype, "STATUS_LN");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], CDRATIO.prototype, "STATUS_A");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], CDRATIO.prototype, "STATUS_B");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CDRATIO.prototype, "BRANCH_CODE");
    CDRATIO = __decorate([
        (0, typeorm_1.Entity)()
    ], CDRATIO);
    return CDRATIO;
}());
exports.CDRATIO = CDRATIO;
