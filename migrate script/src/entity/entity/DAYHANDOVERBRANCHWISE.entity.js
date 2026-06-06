"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DAYHANDOVERBRANCHWISE = void 0;
var typeorm_1 = require("typeorm");
var DAYHANDOVERBRANCHWISE = /** @class */ (function () {
    function DAYHANDOVERBRANCHWISE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DAYHANDOVERBRANCHWISE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAYHANDOVERBRANCHWISE.prototype, "date");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAYHANDOVERBRANCHWISE.prototype, "branch_id");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DAYHANDOVERBRANCHWISE.prototype, "flag");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAYHANDOVERBRANCHWISE.prototype, "time");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DAYHANDOVERBRANCHWISE.prototype, "user_code");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], DAYHANDOVERBRANCHWISE.prototype, "admin_status");
    DAYHANDOVERBRANCHWISE = __decorate([
        (0, typeorm_1.Entity)()
    ], DAYHANDOVERBRANCHWISE);
    return DAYHANDOVERBRANCHWISE;
}());
exports.DAYHANDOVERBRANCHWISE = DAYHANDOVERBRANCHWISE;
