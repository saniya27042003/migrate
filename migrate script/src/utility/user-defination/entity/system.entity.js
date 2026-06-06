"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.System_master = void 0;
var typeorm_1 = require("typeorm");
var System_master = /** @class */ (function () {
    function System_master() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], System_master.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], System_master.prototype, "DateFormat");
    System_master = __decorate([
        (0, typeorm_1.Entity)()
    ], System_master);
    return System_master;
}());
exports.System_master = System_master;
