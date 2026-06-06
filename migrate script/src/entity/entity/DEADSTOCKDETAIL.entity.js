"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DEADSTOCKDETAIL = void 0;
var typeorm_1 = require("typeorm");
var DEADSTOCKHEADER_entity_1 = require("./DEADSTOCKHEADER.entity");
var DEADSTOCKDETAIL = /** @class */ (function () {
    function DEADSTOCKDETAIL() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DEADSTOCKDETAIL.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEADSTOCKDETAIL.prototype, "TRAN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEADSTOCKDETAIL.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEADSTOCKDETAIL.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKDETAIL.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKDETAIL.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEADSTOCKDETAIL.prototype, "ITEM_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKDETAIL.prototype, "ITEM_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKDETAIL.prototype, "ITEM_NAME");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEADSTOCKDETAIL.prototype, "ITEM_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKDETAIL.prototype, "ITEM_QTY");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEADSTOCKDETAIL.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKDETAIL.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKDETAIL.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKDETAIL.prototype, "TRAN_REF_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKDETAIL.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEADSTOCKDETAIL.prototype, "DEPR_RATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], DEADSTOCKDETAIL.prototype, "deadstockHeader");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return DEADSTOCKHEADER_entity_1.DEADSTOCKHEADER; }, function (deadstockHead) { return deadstockHead.deadstockHead; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "deadstockHeader" })
    ], DEADSTOCKDETAIL.prototype, "deadstockHead");
    DEADSTOCKDETAIL = __decorate([
        (0, typeorm_1.Entity)()
    ], DEADSTOCKDETAIL);
    return DEADSTOCKDETAIL;
}());
exports.DEADSTOCKDETAIL = DEADSTOCKDETAIL;
