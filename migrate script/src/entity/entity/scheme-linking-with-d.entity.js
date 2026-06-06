"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SCHEMEDOCUMENTLINK = void 0;
var document_master_entity_1 = require("./document-master.entity");
var typeorm_1 = require("typeorm");
var SCHEMEDOCUMENTLINK = /** @class */ (function () {
    function SCHEMEDOCUMENTLINK() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SCHEMEDOCUMENTLINK.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMEDOCUMENTLINK.prototype, "SCHEME_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SCHEMEDOCUMENTLINK.prototype, "DOCUMENT_CODE");
    __decorate([
        (0, typeorm_1.Column)({ "default": 1 })
    ], SCHEMEDOCUMENTLINK.prototype, "ISACTIVE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return document_master_entity_1.DOCUMENTMASTER; }, function (schemeDocumentMaster) { return schemeDocumentMaster.custdocument; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "DOCUMENT_CODE" })
    ], SCHEMEDOCUMENTLINK.prototype, "schemeDocumentMaster");
    SCHEMEDOCUMENTLINK = __decorate([
        (0, typeorm_1.Entity)()
    ], SCHEMEDOCUMENTLINK);
    return SCHEMEDOCUMENTLINK;
}());
exports.SCHEMEDOCUMENTLINK = SCHEMEDOCUMENTLINK;
