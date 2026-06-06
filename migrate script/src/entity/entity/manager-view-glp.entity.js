"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MANAGERVIEW = void 0;
var typeorm_1 = require("typeorm");
var MANAGERVIEW = /** @class */ (function () {
    function MANAGERVIEW() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MANAGERVIEW.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], MANAGERVIEW.prototype, "SR_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MANAGERVIEW.prototype, "TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MANAGERVIEW.prototype, "STATEMENT_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MANAGERVIEW.prototype, "DESCRIPTION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MANAGERVIEW.prototype, "IS_DISPLAY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MANAGERVIEW.prototype, "PERCENTAGE_TO_WORKING_CAPITAL");
    MANAGERVIEW = __decorate([
        (0, typeorm_1.Entity)()
    ], MANAGERVIEW);
    return MANAGERVIEW;
}());
exports.MANAGERVIEW = MANAGERVIEW;
