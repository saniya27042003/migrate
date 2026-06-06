"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CHEQUECOLLECTTRAN = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var typeorm_1 = require("typeorm");
var CHEQUECOLLECTTRAN = /** @class */ (function () {
    function CHEQUECOLLECTTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CHEQUECOLLECTTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUECOLLECTTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUECOLLECTTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUECOLLECTTRAN.prototype, "TRAN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUECOLLECTTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUECOLLECTTRAN.prototype, "AMT_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUECOLLECTTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUECOLLECTTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUECOLLECTTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHEQUECOLLECTTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUECOLLECTTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUECOLLECTTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUECOLLECTTRAN.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (chequeCollection) { return chequeCollection.chequeCollection; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "BRANCH_CODE" })
    ], CHEQUECOLLECTTRAN.prototype, "chequeCollection");
    CHEQUECOLLECTTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], CHEQUECOLLECTTRAN);
    return CHEQUECOLLECTTRAN;
}());
exports.CHEQUECOLLECTTRAN = CHEQUECOLLECTTRAN;
