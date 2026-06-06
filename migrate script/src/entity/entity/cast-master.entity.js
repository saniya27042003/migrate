"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CASTMASTER = void 0;
var customer_id_entity_1 = require("./customer-id.entity");
var typeorm_1 = require("typeorm");
var CASTMASTER = /** @class */ (function () {
    function CASTMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CASTMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], CASTMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 100 })
    ], CASTMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return customer_id_entity_1.IDMASTER; }, function (cast) { return cast.castMaster; }, {
            cascade: ["insert", "update"]
        })
    ], CASTMASTER.prototype, "cast");
    CASTMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], CASTMASTER);
    return CASTMASTER;
}());
exports.CASTMASTER = CASTMASTER;
