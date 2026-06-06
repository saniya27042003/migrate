"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PAYORDERITEMS = void 0;
var typeorm_1 = require("typeorm");
var PAYORDERITEMS = /** @class */ (function () {
    function PAYORDERITEMS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PAYORDERITEMS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "PO_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "PO_TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "PAYORDER_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "BANK_COMMISSION_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "IN_FAVOUR_OF_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "PO_SERIES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "PAYORDER_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "IS_PRINTED");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "REJECT_OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PAYORDERITEMS.prototype, "COLLECTION_DATE");
    PAYORDERITEMS = __decorate([
        (0, typeorm_1.Entity)()
    ], PAYORDERITEMS);
    return PAYORDERITEMS;
}());
exports.PAYORDERITEMS = PAYORDERITEMS;
