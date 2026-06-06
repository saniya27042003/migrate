"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SCANDOCHISTORY = void 0;
var typeorm_1 = require("typeorm");
var SCANDOCHISTORY = /** @class */ (function () {
    function SCANDOCHISTORY() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SCANDOCHISTORY.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCANDOCHISTORY.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCANDOCHISTORY.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCANDOCHISTORY.prototype, "SCAN_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCANDOCHISTORY.prototype, "SCAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCANDOCHISTORY.prototype, "SUBJECT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCANDOCHISTORY.prototype, "SCANTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCANDOCHISTORY.prototype, "PIC_PATH");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCANDOCHISTORY.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCANDOCHISTORY.prototype, "TRAN_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCANDOCHISTORY.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCANDOCHISTORY.prototype, "OFFICER_CODE");
    SCANDOCHISTORY = __decorate([
        (0, typeorm_1.Entity)()
    ], SCANDOCHISTORY);
    return SCANDOCHISTORY;
}());
exports.SCANDOCHISTORY = SCANDOCHISTORY;
