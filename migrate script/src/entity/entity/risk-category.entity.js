"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RISKCATEGORYMASTER = void 0;
var typeorm_1 = require("typeorm");
var customer_id_entity_1 = require("./customer-id.entity");
var RISKCATEGORYMASTER = /** @class */ (function () {
    function RISKCATEGORYMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], RISKCATEGORYMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], RISKCATEGORYMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 100 })
    ], RISKCATEGORYMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return customer_id_entity_1.IDMASTER; }, function (riskMaster) { return riskMaster.riskCategory; }, {
            cascade: ["insert", "update"]
        })
    ], RISKCATEGORYMASTER.prototype, "riskMaster");
    RISKCATEGORYMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], RISKCATEGORYMASTER);
    return RISKCATEGORYMASTER;
}());
exports.RISKCATEGORYMASTER = RISKCATEGORYMASTER;
