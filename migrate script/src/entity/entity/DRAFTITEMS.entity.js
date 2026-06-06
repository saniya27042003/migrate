"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DRAFTITEMS = void 0;
var typeorm_1 = require("typeorm");
var DRAFTITEMS = /** @class */ (function () {
    function DRAFTITEMS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DRAFTITEMS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTITEMS.prototype, "DD_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTITEMS.prototype, "DD_TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTITEMS.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTITEMS.prototype, "BANK_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTITEMS.prototype, "CITY_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DRAFTITEMS.prototype, "DRAFT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DRAFTITEMS.prototype, "BANK_COMMISSION_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTITEMS.prototype, "DRAFT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTITEMS.prototype, "DRAWEE_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTITEMS.prototype, "DRAFT_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTITEMS.prototype, "DRAFT_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTITEMS.prototype, "ISSUE_BY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DRAFTITEMS.prototype, "IS_PRINTED");
    DRAFTITEMS = __decorate([
        (0, typeorm_1.Entity)()
    ], DRAFTITEMS);
    return DRAFTITEMS;
}());
exports.DRAFTITEMS = DRAFTITEMS;
