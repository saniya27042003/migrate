"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MEETINGNOTICEDESIGNMASTER = void 0;
var typeorm_1 = require("typeorm");
var MEETINGNOTICEDESIGNMASTER = /** @class */ (function () {
    function MEETINGNOTICEDESIGNMASTER() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MEETINGNOTICEDESIGNMASTER.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "VWNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "DOTFILENAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "FLDNAME1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "TAG1");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "FLDNAME2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "TAG2");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "FLDNAME3");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "TAG3");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "FLDNAME4");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "TAG4");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "FLDNAME5");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "TAG5");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "FLDNAME6");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "TAG6");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "FLDNAME7");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "TAG7");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "FLDNAME8");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "TAG8");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "FLDNAME9");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "TAG9");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "FLDNAME10");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGNOTICEDESIGNMASTER.prototype, "TAG10");
    MEETINGNOTICEDESIGNMASTER = __decorate([
        (0, typeorm_1.Entity)()
    ], MEETINGNOTICEDESIGNMASTER);
    return MEETINGNOTICEDESIGNMASTER;
}());
exports.MEETINGNOTICEDESIGNMASTER = MEETINGNOTICEDESIGNMASTER;
