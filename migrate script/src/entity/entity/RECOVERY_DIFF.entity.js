"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RECOVERY_DIFF = void 0;
var typeorm_1 = require("typeorm");
var RECOVERY_DIFF = /** @class */ (function () {
    function RECOVERY_DIFF() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], RECOVERY_DIFF.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RECOVERY_DIFF.prototype, "MEMBER_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RECOVERY_DIFF.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RECOVERY_DIFF.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], RECOVERY_DIFF.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RECOVERY_DIFF.prototype, "AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], RECOVERY_DIFF.prototype, "BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RECOVERY_DIFF.prototype, "REASON");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], RECOVERY_DIFF.prototype, "SALNAME");
    RECOVERY_DIFF = __decorate([
        (0, typeorm_1.Entity)()
    ], RECOVERY_DIFF);
    return RECOVERY_DIFF;
}());
exports.RECOVERY_DIFF = RECOVERY_DIFF;
