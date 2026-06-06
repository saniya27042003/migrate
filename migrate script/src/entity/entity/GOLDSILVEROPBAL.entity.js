"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GOLDSILVEROPBAL = void 0;
var typeorm_1 = require("typeorm");
var GOLDSILVEROPBAL = /** @class */ (function () {
    function GOLDSILVEROPBAL() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], GOLDSILVEROPBAL.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVEROPBAL.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVEROPBAL.prototype, "ITEM_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 4, "default": 0 })
    ], GOLDSILVEROPBAL.prototype, "GROSS_WT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 4, "default": 0 })
    ], GOLDSILVEROPBAL.prototype, "CLEAR_WT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVEROPBAL.prototype, "NO_OF_ITEMS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], GOLDSILVEROPBAL.prototype, "BAL_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], GOLDSILVEROPBAL.prototype, "OP_BALANCE");
    GOLDSILVEROPBAL = __decorate([
        (0, typeorm_1.Entity)()
    ], GOLDSILVEROPBAL);
    return GOLDSILVEROPBAL;
}());
exports.GOLDSILVEROPBAL = GOLDSILVEROPBAL;
