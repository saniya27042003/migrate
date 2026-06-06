"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CHEQUEBOOKISSUED = void 0;
var own_branch_master_entity_1 = require("./own-branch-master.entity");
var schemeParameters_entity_1 = require("./schemeParameters.entity");
var typeorm_1 = require("typeorm");
var CHEQUEBOOKISSUED = /** @class */ (function () {
    function CHEQUEBOOKISSUED() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CHEQUEBOOKISSUED.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEBOOKISSUED.prototype, "DOC_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEBOOKISSUED.prototype, "AC_BRANCH");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEBOOKISSUED.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ length: 15 })
    ], CHEQUEBOOKISSUED.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEBOOKISSUED.prototype, "ISSUE_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEBOOKISSUED.prototype, "CHEQUEBOOK_SERIES");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEBOOKISSUED.prototype, "CHEQUE_NO_FROM");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEBOOKISSUED.prototype, "CHEQUE_NO_TO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKISSUED.prototype, "NO_OF_BOOKS");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKISSUED.prototype, "CHEQUES_PER_BOOK");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKISSUED.prototype, "TOTAL_LEAVES");
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric', precision: 20, scale: 2, "default": 0 })
    ], CHEQUEBOOKISSUED.prototype, "CHEQUE_CHARGES");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKISSUED.prototype, "USER_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKISSUED.prototype, "OFFICER_CODE");
    __decorate([
        (0, typeorm_1.Column)()
    ], CHEQUEBOOKISSUED.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], CHEQUEBOOKISSUED.prototype, "IS_MICR_CHEQUE");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return own_branch_master_entity_1.OWNBRANCHMASTER; }, function (chequebook) { return chequebook.chequebook; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_BRANCH" })
    ], CHEQUEBOOKISSUED.prototype, "chequebook");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return schemeParameters_entity_1.SCHEMAST; }, function (chequeBook) { return chequeBook.chequeBook; }, {
            cascade: true
        }),
        (0, typeorm_1.JoinColumn)({ name: "AC_TYPE" })
    ], CHEQUEBOOKISSUED.prototype, "chequeBook");
    CHEQUEBOOKISSUED = __decorate([
        (0, typeorm_1.Entity)()
    ], CHEQUEBOOKISSUED);
    return CHEQUEBOOKISSUED;
}());
exports.CHEQUEBOOKISSUED = CHEQUEBOOKISSUED;
