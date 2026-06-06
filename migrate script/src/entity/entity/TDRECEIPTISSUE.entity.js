"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TDRECEIPTISSUE = void 0;
var typeorm_1 = require("typeorm");
var TDRECEIPTISSUE = /** @class */ (function () {
    function TDRECEIPTISSUE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TDRECEIPTISSUE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], TDRECEIPTISSUE.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], TDRECEIPTISSUE.prototype, "PRINT_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], TDRECEIPTISSUE.prototype, "PRINT_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDRECEIPTISSUE.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDRECEIPTISSUE.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDRECEIPTISSUE.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDRECEIPTISSUE.prototype, "PRINT_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDRECEIPTISSUE.prototype, "RECEIPT_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDRECEIPTISSUE.prototype, "REASON_OF_DUPLICATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], TDRECEIPTISSUE.prototype, "USER_CODE");
    TDRECEIPTISSUE = __decorate([
        (0, typeorm_1.Entity)()
    ], TDRECEIPTISSUE);
    return TDRECEIPTISSUE;
}());
exports.TDRECEIPTISSUE = TDRECEIPTISSUE;
