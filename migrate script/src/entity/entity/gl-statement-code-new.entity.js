"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Gl_STATEMENT_CODE = void 0;
var typeorm_1 = require("typeorm");
var Gl_STATEMENT_CODE = /** @class */ (function () {
    function Gl_STATEMENT_CODE() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Gl_STATEMENT_CODE.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Gl_STATEMENT_CODE.prototype, "head_name");
    __decorate([
        (0, typeorm_1.Column)()
    ], Gl_STATEMENT_CODE.prototype, "parent_node");
    __decorate([
        (0, typeorm_1.Column)()
    ], Gl_STATEMENT_CODE.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)()
    ], Gl_STATEMENT_CODE.prototype, "created_by");
    Gl_STATEMENT_CODE = __decorate([
        (0, typeorm_1.Entity)()
    ], Gl_STATEMENT_CODE);
    return Gl_STATEMENT_CODE;
}());
exports.Gl_STATEMENT_CODE = Gl_STATEMENT_CODE;
