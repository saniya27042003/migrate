"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SHRFUNDTRAN = void 0;
var typeorm_1 = require("typeorm");
var SHRFUNDTRAN = /** @class */ (function () {
    function SHRFUNDTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SHRFUNDTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHRFUNDTRAN.prototype, "TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHRFUNDTRAN.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHRFUNDTRAN.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHRFUNDTRAN.prototype, "TRAN_MODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "TRAN_DRCR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "TRAN_STATUS");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHRFUNDTRAN.prototype, "TRAN_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHRFUNDTRAN.prototype, "TRAN_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHRFUNDTRAN.prototype, "TRAN_ACNO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], SHRFUNDTRAN.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "TRAN_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "PAY_PERSON_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "NARRATION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "DEATH_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "RESOLUTION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "RESOLUTION_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "TRAN_ENTRY_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "TRAN_SOURCE_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHRFUNDTRAN.prototype, "OFFICER_CODE");
    SHRFUNDTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], SHRFUNDTRAN);
    return SHRFUNDTRAN;
}());
exports.SHRFUNDTRAN = SHRFUNDTRAN;
