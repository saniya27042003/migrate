"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GLREPORTMAST = void 0;
var typeorm_1 = require("typeorm");
var GLREPORTMAST = /** @class */ (function () {
    function GLREPORTMAST() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], GLREPORTMAST.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], GLREPORTMAST.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], GLREPORTMAST.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "FIRST_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "SECOND_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "THIRD_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "FOURTH_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "CODE_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "REPORT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "PERCENTAGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "PERCENTAGE_OF_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "PERCENTAGE_CONSIDARATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "TEMP_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "FINAL_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "FINAL_AMOUNT1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "FINAL_AMOUNT2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "FINAL_HEADING1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "FINAL_HEADING2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "INPUT_ALLOWED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "SUB_COLUMN_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "IS_RATIO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "ALTERNET_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "HO_LIQ_CODE1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "HO_LIQ_CODE2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "IS_PRINT_IN_REPORT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "INNER_AMT_REQD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "ADD_PL_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "PRINT_AT_OUTER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMAST.prototype, "ALTERNATE_BALANCE_CODE");
    GLREPORTMAST = __decorate([
        (0, typeorm_1.Entity)()
    ], GLREPORTMAST);
    return GLREPORTMAST;
}());
exports.GLREPORTMAST = GLREPORTMAST;
