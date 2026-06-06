"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BRANCHWISEBALANCE = void 0;
var typeorm_1 = require("typeorm");
var BRANCHWISEBALANCE = /** @class */ (function () {
    function BRANCHWISEBALANCE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BRANCHWISEBALANCE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEBALANCE.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEBALANCE.prototype, "BRANCH_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], BRANCHWISEBALANCE.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], BRANCHWISEBALANCE.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEBALANCE.prototype, "AC_NAME");
    __decorate([
        (0, typeorm_1.Column)()
    ], BRANCHWISEBALANCE.prototype, "MEMB_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEBALANCE.prototype, "MEMB_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BRANCHWISEBALANCE.prototype, "BALANCE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEBALANCE.prototype, "AC_SALARYDIVISION_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEBALANCE.prototype, "SALARYDIVISION_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], BRANCHWISEBALANCE.prototype, "AC_ACNOTYPE");
    BRANCHWISEBALANCE = __decorate([
        (0, typeorm_1.Entity)()
    ], BRANCHWISEBALANCE);
    return BRANCHWISEBALANCE;
}());
exports.BRANCHWISEBALANCE = BRANCHWISEBALANCE;
