"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MEETINGTRAN = void 0;
var typeorm_1 = require("typeorm");
var MEETINGTRAN = /** @class */ (function () {
    function MEETINGTRAN() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MEETINGTRAN.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGTRAN.prototype, "MEETING_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGTRAN.prototype, "MEETING_YEAR");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGTRAN.prototype, "TRAN_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGTRAN.prototype, "MEETING_DATE");
    __decorate([
        (0, typeorm_1.Column)()
    ], MEETINGTRAN.prototype, "MEETING_TIME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGTRAN.prototype, "MEETING_PLACE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGTRAN.prototype, "MEETING_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], MEETINGTRAN.prototype, "MEETING_PRECIDENT");
    MEETINGTRAN = __decorate([
        (0, typeorm_1.Entity)()
    ], MEETINGTRAN);
    return MEETINGTRAN;
}());
exports.MEETINGTRAN = MEETINGTRAN;
