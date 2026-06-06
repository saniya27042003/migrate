"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.STANDINSTRUCTIONLOG = void 0;
var typeorm_1 = require("typeorm");
var STANDINSTRUCTIONLOG = /** @class */ (function () {
    function STANDINSTRUCTIONLOG() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], STANDINSTRUCTIONLOG.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], STANDINSTRUCTIONLOG.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTIONLOG.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTIONLOG.prototype, "INSTRUCTION_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTIONLOG.prototype, "SUCCESS_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTIONLOG.prototype, "DAILYTRAN_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], STANDINSTRUCTIONLOG.prototype, "EXPECTED_EXECUTION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], STANDINSTRUCTIONLOG.prototype, "PARTICULARS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], STANDINSTRUCTIONLOG.prototype, "OVERDUE_INT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], STANDINSTRUCTIONLOG.prototype, "RECPAY_INT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], STANDINSTRUCTIONLOG.prototype, "INTEREST_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], STANDINSTRUCTIONLOG.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], STANDINSTRUCTIONLOG.prototype, "PAYINT_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], STANDINSTRUCTIONLOG.prototype, "OTHER9_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], STANDINSTRUCTIONLOG.prototype, "PENAL_INT_AMOUNT");
    STANDINSTRUCTIONLOG = __decorate([
        (0, typeorm_1.Entity)()
    ], STANDINSTRUCTIONLOG);
    return STANDINSTRUCTIONLOG;
}());
exports.STANDINSTRUCTIONLOG = STANDINSTRUCTIONLOG;
