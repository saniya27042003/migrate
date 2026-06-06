"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UserDefinationController = void 0;
var common_1 = require("@nestjs/common");
var user_decorator_1 = require("../../../../../../../../src/auth/user.decorator");
var UserDefinationController = /** @class */ (function () {
    function UserDefinationController(formService) {
        this.formService = formService;
    }
    //load data
    UserDefinationController.prototype.load = function (request, dataTableParameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.formService.load({
                            limit: request.query.hasOwnProperty('limit') ? request.query.limit : dataTableParameters.length,
                            page: request.query.hasOwnProperty('page') ? request.query.page : dataTableParameters.start,
                            filterData: dataTableParameters.filterData,
                            branchCode: dataTableParameters.branchCode
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserDefinationController.prototype.editlocal = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formService.editlocal(id)];
            });
        });
    };
    //Insertion 
    UserDefinationController.prototype.insert = function (userdefination) {
        return this.formService.insert(userdefination);
    };
    //For append single row data
    UserDefinationController.prototype.edit = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formService.edit(id)];
            });
        });
    };
    //Updation
    UserDefinationController.prototype.update = function (userdefination) {
        return this.formService.update(userdefination);
    };
    //deletion
    UserDefinationController.prototype["delete"] = function (id) {
        this.formService["delete"](id);
    };
    // dropdown
    // @UseInterceptors(ClassSerializerInterceptor)
    UserDefinationController.prototype.getuserdefinationList = function () {
        return this.formService.getuserdefinationList();
    };
    //Role Management System.
    UserDefinationController.prototype.getRoles = function (user) {
        return this.formService.getRolesList();
    };
    UserDefinationController.prototype.insertRole = function (request, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formService.insertRoles(data)];
            });
        });
    };
    //Role has permission record insert in to rolehaspermission table
    UserDefinationController.prototype.insertRolehasPermission = function (request, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formService.insertRolehasPermission(data)];
            });
        });
    };
    UserDefinationController.prototype.getRoleMenuList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formService.getRoleMenuList()];
            });
        });
    };
    UserDefinationController.prototype.updateRoles = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formService.updateRoles(data)];
            });
        });
    };
    UserDefinationController.prototype.updateRoleBranch = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formService.updateRoleBranch(data)];
            });
        });
    };
    UserDefinationController.prototype.testing = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    UserDefinationController.prototype.updateUser = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formService.update_user(data)];
            });
        });
    };
    // @Post('/function:array')
    // async getNarrationCount(@Param('array') array){
    //   return this.formService.getNarrationCount(array);
    // }
    UserDefinationController.prototype.getNarrationCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formService.getNarrationCount()];
            });
        });
    };
    UserDefinationController.prototype.resetPassword = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formService.resetPassword(data)];
            });
        });
    };
    //logout user
    UserDefinationController.prototype.logout = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formService.logout(data)];
            });
        });
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Request)()),
        __param(1, (0, common_1.Body)())
    ], UserDefinationController.prototype, "load");
    __decorate([
        (0, common_1.Get)('/localData/:id'),
        __param(0, (0, common_1.Param)())
    ], UserDefinationController.prototype, "editlocal");
    __decorate([
        (0, common_1.Post)('/insert'),
        __param(0, (0, common_1.Body)())
    ], UserDefinationController.prototype, "insert");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)())
    ], UserDefinationController.prototype, "edit");
    __decorate([
        (0, common_1.Put)('/update'),
        __param(0, (0, common_1.Body)())
    ], UserDefinationController.prototype, "update");
    __decorate([
        (0, common_1.Delete)('delete/:id'),
        __param(0, (0, common_1.Param)('id'))
    ], UserDefinationController.prototype, "delete");
    __decorate([
        (0, common_1.Get)()
    ], UserDefinationController.prototype, "getuserdefinationList");
    __decorate([
        (0, common_1.Post)('roles'),
        __param(0, (0, user_decorator_1.User)())
    ], UserDefinationController.prototype, "getRoles");
    __decorate([
        (0, common_1.Post)('insert_roles'),
        __param(0, (0, common_1.Request)()),
        __param(1, (0, common_1.Body)())
    ], UserDefinationController.prototype, "insertRole");
    __decorate([
        (0, common_1.Post)('insert_role_permission'),
        __param(0, (0, common_1.Request)()),
        __param(1, (0, common_1.Body)())
    ], UserDefinationController.prototype, "insertRolehasPermission");
    __decorate([
        (0, common_1.Post)('RoleMenuList')
    ], UserDefinationController.prototype, "getRoleMenuList");
    __decorate([
        (0, common_1.Post)('update_roles'),
        __param(0, (0, common_1.Body)())
    ], UserDefinationController.prototype, "updateRoles");
    __decorate([
        (0, common_1.Post)('updateRoleBranch'),
        __param(0, (0, common_1.Body)())
    ], UserDefinationController.prototype, "updateRoleBranch");
    __decorate([
        (0, common_1.Post)('testing'),
        __param(0, (0, user_decorator_1.User)())
    ], UserDefinationController.prototype, "testing");
    __decorate([
        (0, common_1.Post)('/update_user'),
        __param(0, (0, common_1.Body)())
    ], UserDefinationController.prototype, "updateUser");
    __decorate([
        (0, common_1.Post)('/function')
    ], UserDefinationController.prototype, "getNarrationCount");
    __decorate([
        (0, common_1.Post)('/resetpassword'),
        __param(0, (0, common_1.Body)())
    ], UserDefinationController.prototype, "resetPassword");
    __decorate([
        (0, common_1.Post)('/logout'),
        __param(0, (0, common_1.Body)())
    ], UserDefinationController.prototype, "logout");
    UserDefinationController = __decorate([
        (0, common_1.Controller)('user-defination')
    ], UserDefinationController);
    return UserDefinationController;
}());
exports.UserDefinationController = UserDefinationController;
