"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BUDGETMASTER = void 0;
var typeorm_1 = require("typeorm");
var BUDGETMASTER = /** @class */ (function () {
    function BUDGETMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], BUDGETMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], BUDGETMASTER.prototype, "FIN_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], BUDGETMASTER.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], BUDGETMASTER.prototype, "BUDGET_AMOUNT");
    __decorate([
        (0, typeorm_1.Column)()
    ], BUDGETMASTER.prototype, "USER_CODE");
    BUDGETMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], BUDGETMASTER);
    return BUDGETMASTER;
}());
exports.BUDGETMASTER = BUDGETMASTER;
