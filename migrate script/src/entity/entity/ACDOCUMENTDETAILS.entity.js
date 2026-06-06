"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ACDOCUMENTDETAILS = void 0;
var typeorm_1 = require("typeorm");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var ACDOCUMENTDETAILS = /** @class */ (function () {
    function ACDOCUMENTDETAILS() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ACDOCUMENTDETAILS.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACDOCUMENTDETAILS.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACDOCUMENTDETAILS.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACDOCUMENTDETAILS.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], ACDOCUMENTDETAILS.prototype, "DOCUMENT_CODE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (acDocument) { return acDocument.acDocumentDetails; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], ACDOCUMENTDETAILS.prototype, "acDocument");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (acDocumentMaster) { return acDocumentMaster.acDocumentDetails; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "DOCUMENT_CODE" })
    ], ACDOCUMENTDETAILS.prototype, "acDocumentMaster");
    ACDOCUMENTDETAILS = __decorate([
        (0, typeorm_1.Entity)()
    ], ACDOCUMENTDETAILS);
    return ACDOCUMENTDETAILS;
}());
exports.ACDOCUMENTDETAILS = ACDOCUMENTDETAILS;
