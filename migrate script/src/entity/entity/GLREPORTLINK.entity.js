"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GLREPORTLINK = void 0;
var typeorm_1 = require("typeorm");
var GLREPORTLINK = /** @class */ (function () {
    function GLREPORTLINK() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], GLREPORTLINK.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTLINK.prototype, "REPORT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTLINK.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTLINK.prototype, "CODE_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTLINK.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTLINK.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], GLREPORTLINK.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTLINK.prototype, "SUB_COLUMN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTLINK.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTLINK.prototype, "REVERSE_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTLINK.prototype, "DEFAULT_BALTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTLINK.prototype, "EFFECT_TO_DATE");
    GLREPORTLINK = __decorate([
        (0, typeorm_1.Entity)()
    ], GLREPORTLINK);
    return GLREPORTLINK;
}());
exports.GLREPORTLINK = GLREPORTLINK;
