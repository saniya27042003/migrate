"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NPAMASTER = void 0;
var typeorm_1 = require("typeorm");
var npa_class_entity_1 = require("./npa-class.entity");
var NPAMASTER = /** @class */ (function () {
    function NPAMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], NPAMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], NPAMASTER.prototype, "EFFECT_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], NPAMASTER.prototype, "NPA_BASE_DAYS");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return npa_class_entity_1.NPACLASSIFICATION; }, function (NPAClass) { return NPAClass.NPA; }, {
            cascade: ["insert", "update"]
        })
    ], NPAMASTER.prototype, "NPAClass");
    NPAMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], NPAMASTER);
    return NPAMASTER;
}());
exports.NPAMASTER = NPAMASTER;
