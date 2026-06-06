"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CATEGORYMASTER = void 0;
var typeorm_1 = require("typeorm");
var share_master_entity_1 = require("./share-master.entity");
var dpmaster_entity_1 = require("./dpmaster.entity");
var CATEGORYMASTER = /** @class */ (function () {
    function CATEGORYMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CATEGORYMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], CATEGORYMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', length: 100 })
    ], CATEGORYMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CATEGORYMASTER.prototype, "ACNOTYPE");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return share_master_entity_1.SHMASTER; }, function (category) { return category.CategoryMaster; }, {
            cascade: ["insert", "update"]
        })
    ], CATEGORYMASTER.prototype, "category");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return dpmaster_entity_1.DPMASTER; }, function (category) { return category.CategoryMaster; }, {
            cascade: ["insert", "update"]
        })
    ], CATEGORYMASTER.prototype, "DPcategory");
    CATEGORYMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], CATEGORYMASTER);
    return CATEGORYMASTER;
}());
exports.CATEGORYMASTER = CATEGORYMASTER;
