"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PASSBOOKHISTORY = void 0;
var typeorm_1 = require("typeorm");
var PASSBOOKHISTORY = /** @class */ (function () {
    function PASSBOOKHISTORY() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PASSBOOKHISTORY.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKHISTORY.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PASSBOOKHISTORY.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], PASSBOOKHISTORY.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKHISTORY.prototype, "LAST_PRINT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PASSBOOKHISTORY.prototype, "LAST_PRINT_TRANNO");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], PASSBOOKHISTORY.prototype, "PS_LINES_PRINTED");
    PASSBOOKHISTORY = __decorate([
        (0, typeorm_1.Entity)()
    ], PASSBOOKHISTORY);
    return PASSBOOKHISTORY;
}());
exports.PASSBOOKHISTORY = PASSBOOKHISTORY;
