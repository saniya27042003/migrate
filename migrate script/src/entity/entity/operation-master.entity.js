"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OPERATIONMASTER = void 0;
var typeorm_1 = require("typeorm");
var dpmaster_entity_1 = require("./dpmaster.entity");
var OPERATIONMASTER = /** @class */ (function () {
    function OPERATIONMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], OPERATIONMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], OPERATIONMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 100 })
    ], OPERATIONMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return dpmaster_entity_1.DPMASTER; }, function (operation) { return operation.OperationMaster; }, {
            cascade: ["insert", "update"]
        })
    ], OPERATIONMASTER.prototype, "operation");
    OPERATIONMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], OPERATIONMASTER);
    return OPERATIONMASTER;
}());
exports.OPERATIONMASTER = OPERATIONMASTER;
