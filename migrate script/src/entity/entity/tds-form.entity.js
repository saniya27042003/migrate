"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TDSFORMSUBMIT = void 0;
var typeorm_1 = require("typeorm");
var customer_id_entity_1 = require("./customer-id.entity");
var TDSFORMSUBMIT = /** @class */ (function () {
    function TDSFORMSUBMIT() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TDSFORMSUBMIT.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDSFORMSUBMIT.prototype, "FIN_YEAR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDSFORMSUBMIT.prototype, "SUBMIT_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDSFORMSUBMIT.prototype, "FORM_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 5, scale: 2, "default": 0 })
    ], TDSFORMSUBMIT.prototype, "TDS_RATE");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], TDSFORMSUBMIT.prototype, "TDS_LIMIT");
    __decorate([
        (0, typeorm_1.Column)({ "default": true })
    ], TDSFORMSUBMIT.prototype, "IS_EXEMPT_TDS");
    __decorate([
        (0, typeorm_1.CreateDateColumn)()
    ], TDSFORMSUBMIT.prototype, "SYSADD_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDSFORMSUBMIT.prototype, "SYSADD_LOGIN");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)()
    ], TDSFORMSUBMIT.prototype, "SYSCHNG_DATETIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDSFORMSUBMIT.prototype, "SYSCHNG_LOGIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], TDSFORMSUBMIT.prototype, "idmasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return customer_id_entity_1.IDMASTER; }, function (idmaster) { return idmaster.tdsForm; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idmasterID" })
    ], TDSFORMSUBMIT.prototype, "idmaster");
    TDSFORMSUBMIT = __decorate([
        (0, typeorm_1.Entity)()
    ], TDSFORMSUBMIT);
    return TDSFORMSUBMIT;
}());
exports.TDSFORMSUBMIT = TDSFORMSUBMIT;
