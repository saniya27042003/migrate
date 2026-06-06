"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PIGMYCHARTMASTER = void 0;
var typeorm_1 = require("typeorm");
var pigmy_chart_entity_1 = require("./pigmy-chart.entity");
var pgmaster_entity_1 = require("./pgmaster.entity");
var PIGMYCHARTMASTER = /** @class */ (function () {
    function PIGMYCHARTMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PIGMYCHARTMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHARTMASTER.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ "default": "PG", length: 2 })
    ], PIGMYCHARTMASTER.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHARTMASTER.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHARTMASTER.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], PIGMYCHARTMASTER.prototype, "TRAN_BANKACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYCHARTMASTER.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHARTMASTER.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYCHARTMASTER.prototype, "RECEIPT_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYCHARTMASTER.prototype, "CHART_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHARTMASTER.prototype, "PIGMYCHARTID");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHARTMASTER.prototype, "pigmyAccountID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return pigmy_chart_entity_1.PIGMYCHART; }, function (PIGMYCHART) { return PIGMYCHART.pigmyChartMaster; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "PIGMYCHARTID" })
    ], PIGMYCHARTMASTER.prototype, "PIGMYCHART");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return pgmaster_entity_1.PGMASTER; }, function (accountId) { return accountId.pigmychart; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "pigmyAccountID" })
    ], PIGMYCHARTMASTER.prototype, "accountId");
    PIGMYCHARTMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], PIGMYCHARTMASTER);
    return PIGMYCHARTMASTER;
}());
exports.PIGMYCHARTMASTER = PIGMYCHARTMASTER;
