"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CHARGESAMT = void 0;
var typeorm_1 = require("typeorm");
var scheme_type_charges_entity_1 = require("./scheme-type-charges.entity");
var CHARGESAMT = /** @class */ (function () {
    function CHARGESAMT() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CHARGESAMT.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], CHARGESAMT.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], CHARGESAMT.prototype, "FROM_RANGE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], CHARGESAMT.prototype, "TO_RANGE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHARGESAMT.prototype, "CHARGES_AMT");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], CHARGESAMT.prototype, "idRateID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return scheme_type_charges_entity_1.CHARGES; }, function (idRate) { return idRate.rate; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idRateID" })
    ], CHARGESAMT.prototype, "idRate");
    CHARGESAMT = __decorate([
        (0, typeorm_1.Entity)()
    ], CHARGESAMT);
    return CHARGESAMT;
}());
exports.CHARGESAMT = CHARGESAMT;
