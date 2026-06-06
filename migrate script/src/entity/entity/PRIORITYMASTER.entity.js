"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PRIORITYMASTER = void 0;
var typeorm_1 = require("typeorm");
var PRIORITYMASTER = /** @class */ (function () {
    function PRIORITYMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PRIORITYMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], PRIORITYMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PRIORITYMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)()
    ], PRIORITYMASTER.prototype, "SUB1_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], PRIORITYMASTER.prototype, "SUB2_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], PRIORITYMASTER.prototype, "SUB3_CODE");
    PRIORITYMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], PRIORITYMASTER);
    return PRIORITYMASTER;
}());
exports.PRIORITYMASTER = PRIORITYMASTER;
