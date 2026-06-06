"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DEPRRATE = void 0;
var depriciation_category_master_entity_1 = require("./depriciation-category-master.entity");
var typeorm_1 = require("typeorm");
var DEPRRATE = /** @class */ (function () {
    function DEPRRATE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DEPRRATE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], DEPRRATE.prototype, "DEPR_RATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPRRATE.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], DEPRRATE.prototype, "CATEGORY");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return depriciation_category_master_entity_1.DEPRCATEGORY; }, function (decategory) { return decategory.deprerate; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "CATEGORY" })
    ], DEPRRATE.prototype, "decategory");
    DEPRRATE = __decorate([
        (0, typeorm_1.Entity)()
    ], DEPRRATE);
    return DEPRRATE;
}());
exports.DEPRRATE = DEPRRATE;
