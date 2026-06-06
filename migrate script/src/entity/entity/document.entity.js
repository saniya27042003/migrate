"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CUSTDOCUMENT = void 0;
var typeorm_1 = require("typeorm");
var customer_id_entity_1 = require("./customer-id.entity");
var document_master_entity_1 = require("./document-master.entity");
var CUSTDOCUMENT = /** @class */ (function () {
    function CUSTDOCUMENT() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CUSTDOCUMENT.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CUSTDOCUMENT.prototype, "PATH");
    __decorate([
        (0, typeorm_1.Column)()
    ], CUSTDOCUMENT.prototype, "idmasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return customer_id_entity_1.IDMASTER; }, function (idmaster) { return idmaster.custdocument; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "idmasterID" })
    ], CUSTDOCUMENT.prototype, "idmaster");
    __decorate([
        (0, typeorm_1.Column)()
    ], CUSTDOCUMENT.prototype, "DocumentMasterID");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return document_master_entity_1.DOCUMENTMASTER; }, function (DocumentMaster) { return DocumentMaster.custdocument; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "DocumentMasterID" })
    ], CUSTDOCUMENT.prototype, "DocumentMaster");
    CUSTDOCUMENT = __decorate([
        (0, typeorm_1.Entity)()
    ], CUSTDOCUMENT);
    return CUSTDOCUMENT;
}());
exports.CUSTDOCUMENT = CUSTDOCUMENT;
