"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PIGMYCHART = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var typeorm_1 = require("typeorm");
var pigmyChart_entity_1 = require("./pigmyChart.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var PIGMYCHART = /** @class */ (function () {
    function PIGMYCHART() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PIGMYCHART.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], PIGMYCHART.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYCHART.prototype, "BRANCHCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYCHART.prototype, "BRANCH_ID");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHART.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHART.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ "default": "CS", length: 2 })
    ], PIGMYCHART.prototype, "TRAN_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": "C", length: 1 })
    ], PIGMYCHART.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ "default": 1 })
    ], PIGMYCHART.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], PIGMYCHART.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ "default": 1 })
    ], PIGMYCHART.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ "default": "CH", length: 2 })
    ], PIGMYCHART.prototype, "ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ "default": "AG", length: 2 })
    ], PIGMYCHART.prototype, "AGENT_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHART.prototype, "AGENT_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHART.prototype, "AGENT_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], PIGMYCHART.prototype, "AGENT_BANKACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYCHART.prototype, "CASHIER_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHART.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHART.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'date', nullable: true })
    ], PIGMYCHART.prototype, "AUTO_VOUCHER_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYCHART.prototype, "AUTO_VOUCHER_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], PIGMYCHART.prototype, "CHART_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PIGMYCHART.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (BranchCode) { return BranchCode.branchCodePigmyChart; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], PIGMYCHART.prototype, "BranchCode");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pigmyChart_entity_1.PIGMYCHARTMASTER; }, function (pigmyChartMaster) { return pigmyChartMaster.PIGMYCHART; }, {
            cascade: ["insert", "update"]
        })
    ], PIGMYCHART.prototype, "pigmyChartMaster");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (Scheme) { return Scheme.pigmyChart; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AGENT_ACTYPE" })
    ], PIGMYCHART.prototype, "Scheme");
    PIGMYCHART = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Check)("\"TRAN_DRCR\" IN ('D', 'C')")
    ], PIGMYCHART);
    return PIGMYCHART;
}());
exports.PIGMYCHART = PIGMYCHART;
