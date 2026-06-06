"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SHARDETL = void 0;
var typeorm_1 = require("typeorm");
var SHARDETL = /** @class */ (function () {
    function SHARDETL() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], SHARDETL.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARDETL.prototype, "AC_NO");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARDETL.prototype, "AC_TYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_HONO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_HOSUBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_WARD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_ADDR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_GALLI");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_AREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_THONO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_THOSUBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_TWARD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_TADDR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_TGALLI");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_TAREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_TCTCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_TPIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_RESNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_RESDT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NRELA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NOM_AGE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NHONO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NHOSUBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NWARD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NADDR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NGALLI");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NAREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NCTCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NPIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_NARR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_SREPRESENT");
    __decorate([
        (0, typeorm_1.Column)()
    ], SHARDETL.prototype, "AC_ACNOTYPE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_HONO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_HOSUBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_WARD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_ADDR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_GALLI");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_AREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_THONO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_THOSUBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_TWARD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_TADDR");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_TGALLI");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_TAREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_TCTCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_OTH_TPIN");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_DEV_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_DEV_ADD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_DEV_WARD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_DEV_GALLI");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_DEV_AREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_DEV_CITYCODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_ENG_NAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_ENG_HONO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_ENG_HOSUBNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_ENG_ADD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_ENG_WARD");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_ENG_GALLI");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_ENG_AREA");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_ENG_CITY");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_INSU_CODE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_INSU_DATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_INSU_POLICYNO");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_INSU_PLANNAME");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_INSU_POLICYAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_INSU_TERM");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_INSU_PREMAMT");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_INSU_EXPDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_INSU_NEXTPREMDATE");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], SHARDETL.prototype, "AC_INSU_IS_REFUND");
    SHARDETL = __decorate([
        (0, typeorm_1.Entity)()
    ], SHARDETL);
    return SHARDETL;
}());
exports.SHARDETL = SHARDETL;
