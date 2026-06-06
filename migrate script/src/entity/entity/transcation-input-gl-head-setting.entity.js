"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TRANINPUTHEAD = void 0;
var typeorm_1 = require("typeorm");
var TRANINPUTHEAD = /** @class */ (function () {
    function TRANINPUTHEAD() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TRANINPUTHEAD.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], TRANINPUTHEAD.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], TRANINPUTHEAD.prototype, "SCHEME_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], TRANINPUTHEAD.prototype, "FIELD_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], TRANINPUTHEAD.prototype, "FIELD_GL");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], TRANINPUTHEAD.prototype, "FIELD_INTEREST_DATE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], TRANINPUTHEAD.prototype, "FIELD_TRAN_TABLE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], TRANINPUTHEAD.prototype, "GL_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], TRANINPUTHEAD.prototype, "GL_CODE_FROM_SCHEME_FIELD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], TRANINPUTHEAD.prototype, "DESCRIPTION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], TRANINPUTHEAD.prototype, "SHORT_NAME");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], TRANINPUTHEAD.prototype, "CHECK_REQUIRE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], TRANINPUTHEAD.prototype, "CHECK_BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], TRANINPUTHEAD.prototype, "DRCR_APPLICABLE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], TRANINPUTHEAD.prototype, "INTEREST_DATE_INPUT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": 0 })
    ], TRANINPUTHEAD.prototype, "HEAD_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], TRANINPUTHEAD.prototype, "IS_NOTING_REQUIRED");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], TRANINPUTHEAD.prototype, "IS_GLBAL_MAINTAIN");
    TRANINPUTHEAD = __decorate([
        (0, typeorm_1.Entity)()
    ], TRANINPUTHEAD);
    return TRANINPUTHEAD;
}());
exports.TRANINPUTHEAD = TRANINPUTHEAD;
