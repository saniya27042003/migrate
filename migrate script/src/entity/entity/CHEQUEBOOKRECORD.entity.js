"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CHEQUEBOOKRECORD = void 0;
var typeorm_1 = require("typeorm");
var CHEQUEBOOKRECORD = /** @class */ (function () {
    function CHEQUEBOOKRECORD() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CHEQUEBOOKRECORD.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEBOOKRECORD.prototype, "DOC_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEBOOKRECORD.prototype, "CHEQUEBOOK_SERIES");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEBOOKRECORD.prototype, "CHEQUE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKRECORD.prototype, "DEBIT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKRECORD.prototype, "STOP_PAYMENT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKRECORD.prototype, "STOP_PAYMENT_REASON");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHEQUEBOOKRECORD.prototype, "STOP_PAYMENT_CHARGES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKRECORD.prototype, "REVOKE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKRECORD.prototype, "LOST_INFO_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKRECORD.prototype, "RETURN_UNPAID_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKRECORD.prototype, "CHEQUE_RETURN_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKRECORD.prototype, "CHEQUE_SURRENDER_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKRECORD.prototype, "STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKRECORD.prototype, "USER_CODE");
    CHEQUEBOOKRECORD = __decorate([
        (0, typeorm_1.Entity)()
    ], CHEQUEBOOKRECORD);
    return CHEQUEBOOKRECORD;
}());
exports.CHEQUEBOOKRECORD = CHEQUEBOOKRECORD;
