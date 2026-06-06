"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.INTINSTRUCTIONSLOG = void 0;
var typeorm_1 = require("typeorm");
var INTINSTRUCTIONSLOG = /** @class */ (function () {
    function INTINSTRUCTIONSLOG() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], INTINSTRUCTIONSLOG.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTINSTRUCTIONSLOG.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTINSTRUCTIONSLOG.prototype, "REF_ID");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "INSTRUCTION_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "SUCCESS_STATUS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "DAILYTRAN_TRAN_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], INTINSTRUCTIONSLOG.prototype, "EXPECTED_EXECUTION_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "LAST_INT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "PARTICULARS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "CR_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "CR_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], INTINSTRUCTIONSLOG.prototype, "CR_AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "HO_SUB_GLACNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "TRAN_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "DR_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "DR_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], INTINSTRUCTIONSLOG.prototype, "DR_AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], INTINSTRUCTIONSLOG.prototype, "ADV_NARRATION");
    INTINSTRUCTIONSLOG = __decorate([
        (0, typeorm_1.Entity)()
    ], INTINSTRUCTIONSLOG);
    return INTINSTRUCTIONSLOG;
}());
exports.INTINSTRUCTIONSLOG = INTINSTRUCTIONSLOG;
