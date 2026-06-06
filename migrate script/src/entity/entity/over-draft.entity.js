"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TODTRAN = void 0;
var typeorm_1 = require("typeorm");
var TODTRAN = /** @class */ (function () {
    function TODTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TODTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TODTRAN.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15, "default": 0 })
    ], TODTRAN.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], TODTRAN.prototype, "AC_ODAMT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], TODTRAN.prototype, "AC_SODAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TODTRAN.prototype, "AC_ODDAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TODTRAN.prototype, "AC_ODDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TODTRAN.prototype, "RELEASE_DATE");
    TODTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], TODTRAN);
    return TODTRAN;
}());
exports.TODTRAN = TODTRAN;
