"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GLREPORTMASTER = void 0;
var typeorm_1 = require("typeorm");
var GLREPORTMASTER = /** @class */ (function () {
    function GLREPORTMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], GLREPORTMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], GLREPORTMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], GLREPORTMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "REF_ID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "FIRST_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "SECOND_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "THIRD_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "FOURTH_SRNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "CODE_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "REPORT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], GLREPORTMASTER.prototype, "PERCENTAGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "PERCENTAGE_OF_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "PERCENTAGE_CONSIDARATION");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], GLREPORTMASTER.prototype, "TEMP_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], GLREPORTMASTER.prototype, "FINAL_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], GLREPORTMASTER.prototype, "FINAL_AMOUNT1");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], GLREPORTMASTER.prototype, "FINAL_AMOUNT2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "FINAL_HEADING1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "FINAL_HEADING2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "INPUT_ALLOWED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "SUB_COLUMN_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "IS_RATIO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "ALTERNET_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "HO_LIQ_CODE1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "HO_LIQ_CODE2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "IS_PRINT_IN_REPORT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "INNER_AMT_REQD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "ADD_PL_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "PRINT_AT_OUTER");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GLREPORTMASTER.prototype, "ALTERNATE_BALANCE_CODE");
    GLREPORTMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], GLREPORTMASTER);
    return GLREPORTMASTER;
}());
exports.GLREPORTMASTER = GLREPORTMASTER;
