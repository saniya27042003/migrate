"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HISTORYDIVIDEND = void 0;
var typeorm_1 = require("typeorm");
var share_master_entity_1 = require("./share-master.entity");
var HISTORYDIVIDEND = /** @class */ (function () {
    function HISTORYDIVIDEND() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], HISTORYDIVIDEND.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "WARRENT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "WARRENT_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "DIV_FROM_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "DIV_TO_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], HISTORYDIVIDEND.prototype, "ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], HISTORYDIVIDEND.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "TOTAL_SHARES");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYDIVIDEND.prototype, "TOTAL_SHARES_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYDIVIDEND.prototype, "DIVIDEND_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "DIVIDEND_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "DIV_PAID_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "DIV_TRANSFER_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "DIV_TRANSFER_BRANCH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "DIV_TRANSFER_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "DIV_TRANSFER_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], HISTORYDIVIDEND.prototype, "DIV_TRANSFER_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "MEMBER_CLOSE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "IS_LESS_EXPIRE_DATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], HISTORYDIVIDEND.prototype, "BONUS_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "AC_SALARYDIVISION_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "SUB_SALARYDIVISION_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], HISTORYDIVIDEND.prototype, "sharesID");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return share_master_entity_1.SHMASTER; }, function (sharesId) { return sharesId.shareDividend; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "sharesID" })
    ], HISTORYDIVIDEND.prototype, "sharesId");
    HISTORYDIVIDEND = __decorate([
        (0, typeorm_1.Entity)()
    ], HISTORYDIVIDEND);
    return HISTORYDIVIDEND;
}());
exports.HISTORYDIVIDEND = HISTORYDIVIDEND;
