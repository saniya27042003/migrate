"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NPACLASSIFICATION = void 0;
var typeorm_1 = require("typeorm");
var npa_classification_entity_1 = require("./npa-classification.entity");
var NPACLASSIFICATION = /** @class */ (function () {
    function NPACLASSIFICATION() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], NPACLASSIFICATION.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], NPACLASSIFICATION.prototype, "SERIAL_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], NPACLASSIFICATION.prototype, "NPA_CLASS");
    __decorate([
        (0, typeorm_1.Column)()
    ], NPACLASSIFICATION.prototype, "SUB_CLASS_NO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPACLASSIFICATION.prototype, "NPA_DESCRIPTION");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPACLASSIFICATION.prototype, "FROM_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPACLASSIFICATION.prototype, "FROM_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPACLASSIFICATION.prototype, "TO_MONTHS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPACLASSIFICATION.prototype, "TO_DAYS");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPACLASSIFICATION.prototype, "SECURED_PERCENT");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], NPACLASSIFICATION.prototype, "UNSECURED_PERCENT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], NPACLASSIFICATION.prototype, "NPAClassID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return npa_classification_entity_1.NPAMASTER; }, function (NPA) { return NPA.NPAClass; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "NPAClassID" })
    ], NPACLASSIFICATION.prototype, "NPA");
    NPACLASSIFICATION = __decorate([
        (0, typeorm_1.Entity)()
    ], NPACLASSIFICATION);
    return NPACLASSIFICATION;
}());
exports.NPACLASSIFICATION = NPACLASSIFICATION;
