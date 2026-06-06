"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PREMATULESS = void 0;
var typeorm_1 = require("typeorm");
var premature_pigmy_less_int_rate_entity_1 = require("./premature-pigmy-less-int-rate.entity");
var PREMATULESS = /** @class */ (function () {
    function PREMATULESS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PREMATULESS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], PREMATULESS.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], PREMATULESS.prototype, "FROM_MONTHS");
    __decorate([
        (0, typeorm_1.Column)()
    ], PREMATULESS.prototype, "TO_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], PREMATULESS.prototype, "LESS_INT_RATE");
    __decorate([
        (0, typeorm_1.Column)({ unique: false })
    ], PREMATULESS.prototype, "idRateID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return premature_pigmy_less_int_rate_entity_1.PREMATULESSRATE; }, function (idRate) { return idRate.rate; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idRateID" })
    ], PREMATULESS.prototype, "idRate");
    PREMATULESS = __decorate([
        (0, typeorm_1.Entity)()
    ], PREMATULESS);
    return PREMATULESS;
}());
exports.PREMATULESS = PREMATULESS;
