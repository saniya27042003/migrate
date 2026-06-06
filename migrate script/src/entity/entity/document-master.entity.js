"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DOCUMENTMASTER = void 0;
var ACDOCUMENTDETAILS_entity_1 = require("./ACDOCUMENTDETAILS.entity");
var scheme_linking_with_d_entity_1 = require("./scheme-linking-with-d.entity");
var typeorm_1 = require("typeorm");
var document_entity_1 = require("./document.entity");
var DOCUMENTMASTER = /** @class */ (function () {
    function DOCUMENTMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], DOCUMENTMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)('increment')
    ], DOCUMENTMASTER.prototype, "CODE");
    __decorate([
        (0, typeorm_1.Column)({ length: 100 })
    ], DOCUMENTMASTER.prototype, "NAME");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return document_entity_1.CUSTDOCUMENT; }, function (custdocument) { return custdocument.DocumentMaster; }, {
            cascade: ["insert", "update"]
        })
    ], DOCUMENTMASTER.prototype, "custdocument");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ACDOCUMENTDETAILS_entity_1.ACDOCUMENTDETAILS; }, function (acDocumentDetails) { return acDocumentDetails.acDocumentMaster; }, {
            cascade: ["insert", "update"]
        })
    ], DOCUMENTMASTER.prototype, "acDocumentDetails");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return scheme_linking_with_d_entity_1.SCHEMEDOCUMENTLINK; }, function (schemeDocumentMaster) { return schemeDocumentMaster.schemeDocumentMaster; }, {
            cascade: ["insert", "update"]
        })
    ], DOCUMENTMASTER.prototype, "schemeDocumentMaster");
    DOCUMENTMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], DOCUMENTMASTER);
    return DOCUMENTMASTER;
}());
exports.DOCUMENTMASTER = DOCUMENTMASTER;
