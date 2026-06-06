"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ACCOHEAD = void 0;
var typeorm_1 = require("typeorm");
var ACCOHEAD = /** @class */ (function () {
    function ACCOHEAD() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ACCOHEAD.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], ACCOHEAD.prototype, "A_BALCODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 250 })
    ], ACCOHEAD.prototype, "A_ACHEAD");
    __decorate([
        (0, typeorm_1.Column)({ length: 20 })
    ], ACCOHEAD.prototype, "A_ACTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, length: 20 })
    ], ACCOHEAD.prototype, "ALTERNATE_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], ACCOHEAD.prototype, "IS_PRINT_HEAD_IN_ONESIDE");
    ACCOHEAD = __decorate([
        (0, typeorm_1.Entity)()
    ], ACCOHEAD);
    return ACCOHEAD;
}());
exports.ACCOHEAD = ACCOHEAD;
