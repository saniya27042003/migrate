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
exports.UserDefinationService = void 0;
var common_1 = require("@nestjs/common");
var user_defination_entity_1 = require("./entity/user-defination.entity");
var typeorm_1 = require("@nestjs/typeorm");
var typeorm_2 = require("typeorm");
var pagination_1 = require("./user-defination-pagination/pagination");
var role_master_entity_1 = require("./entity/role-master.entity");
var role_has_permission_entity_1 = require("./entity/role-has-permission.entity");
var bcrypt = require("bcrypt");
var role_define_entity_1 = require("./entity/role-define.entity");
var mime = require('mime');
var fs = require("fs");
var UserDefinationService = /** @class */ (function () {
    function UserDefinationService(manager, formPostRepository, RoleRepository, RoleHasRepository, RoleDefineRepository) {
        this.manager = manager;
        this.formPostRepository = formPostRepository;
        this.RoleRepository = RoleRepository;
        this.RoleHasRepository = RoleHasRepository;
        this.RoleDefineRepository = RoleDefineRepository;
    }
    //Method for load data from database
    UserDefinationService.prototype.load = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var object, key, _a, data, recordsTotal;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        object = {};
                        for (key in options.filterData) {
                            object[key] = (0, typeorm_2.Like)("%".concat(options.filterData[key], "%"));
                        }
                        return [4 /*yield*/, this.formPostRepository.findAndCount({
                                relations: ['RoleDefine', 'RoleDefine.Role', 'branch', 'branch.syspara'],
                                take: options.limit,
                                skip: options.page,
                                where: object
                            })];
                    case 1:
                        _a = _b.sent(), data = _a[0], recordsTotal = _a[1];
                        return [2 /*return*/, new pagination_1.Pagination({
                                data: data,
                                recordsTotal: recordsTotal
                            })];
                }
            });
        });
    };
    //insertion into database
    UserDefinationService.prototype.insert = function (userdefination) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, date, result, i, roleDefine, roledata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt.hash(userdefination.PASSWORD, 10)];
                    case 1:
                        hash = _a.sent();
                        userdefination.PASSWORD = hash;
                        date = new Date();
                        date.setDate(date.getDate() + 90);
                        userdefination['EXP_DATE'] = date.toString();
                        return [4 /*yield*/, this.formPostRepository.save(userdefination)];
                    case 2:
                        result = _a.sent();
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < userdefination.roleId.length)) return [3 /*break*/, 6];
                        roleDefine = new role_define_entity_1.ROLE_DEFINE();
                        roleDefine['RoleId'] = userdefination.roleId[i];
                        roleDefine['UserId'] = result.id;
                        return [4 /*yield*/, this.RoleDefineRepository.save(roleDefine)];
                    case 4:
                        roledata = _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, result];
                }
            });
        });
    };
    //featch single row data from database
    UserDefinationService.prototype.edit = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formPostRepository.findOne(id, { relations: ['RoleDefine', 'RoleDefine.Role', 'branch', 'branch.syspara'] })];
            });
        });
    };
    //Updation into database
    UserDefinationService.prototype.update = function (userdefination) {
        return __awaiter(this, void 0, void 0, function () {
            var hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt.hash(userdefination.PASSWORD, 10)];
                    case 1:
                        hash = _a.sent();
                        userdefination.PASSWORD = hash;
                        return [4 /*yield*/, this.formPostRepository.update(userdefination.id, userdefination)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //deletion into database
    UserDefinationService.prototype["delete"] = function (id) {
        this.formPostRepository["delete"](id);
    };
    // dropdown
    UserDefinationService.prototype.getuserdefinationList = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.formPostRepository.createQueryBuilder("user")
                            .innerJoinAndSelect("user.RoleDefine", "RoleDefine")
                            .leftJoinAndSelect("RoleDefine.Role", "Role")
                            .leftJoinAndSelect("Role.Rolehaspermission", "RolePermission")
                            .innerJoinAndSelect("user.branch", "branch")
                            .leftJoinAndSelect("branch.syspara", "bankDetails")
                            .getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //ROLE_MASTER
    UserDefinationService.prototype.getRolesList = function () {
        return this.RoleRepository.find();
    };
    UserDefinationService.prototype.insertRoles = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        return [4 /*yield*/, this.RoleRepository.find({
                                where: {
                                    NAME: data.NAME
                                }
                            })];
                    case 1:
                        result = _a.sent();
                        if (result.length != 0) {
                            throw new common_1.BadRequestException('Role Already Exists');
                        }
                        else {
                            return [2 /*return*/, this.RoleRepository.save(data)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDefinationService.prototype.updateRoles = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.RoleRepository.find({
                            where: {
                                NAME: data.NAME
                            }
                        })];
                    case 1:
                        result = _a.sent();
                        if (result.length != 0 && data.STATUS == result[0].STATUS) {
                            throw new common_1.BadRequestException('Role Name Already Exists');
                        }
                        else {
                            return [2 /*return*/, this.RoleRepository.update(data.id, data)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //insert role permissions
    UserDefinationService.prototype.insertRolehasPermission = function (data) {
        return this.RoleHasRepository.save(data);
    };
    UserDefinationService.prototype.getRoleMenuList = function () {
        return this.RoleHasRepository.find({ relations: ['Role'] });
    };
    //update Role and Branch Data
    UserDefinationService.prototype.updateRoleBranch = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteResult, updateResult, i, roleDefine, roledata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (data.EDIT_ROLE.length == 0) {
                            throw new common_1.BadRequestException('Please select aleast one role');
                        }
                        return [4 /*yield*/, this.RoleDefineRepository["delete"]({ 'UserId': data.id })];
                    case 1:
                        deleteResult = _a.sent();
                        return [4 /*yield*/, this.formPostRepository.update(data.id, { 'branchId': data.Edit_branchId })];
                    case 2:
                        updateResult = _a.sent();
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < data.EDIT_ROLE.length)) return [3 /*break*/, 6];
                        roleDefine = new role_define_entity_1.ROLE_DEFINE();
                        roleDefine['RoleId'] = data.EDIT_ROLE[i];
                        roleDefine['UserId'] = data.id;
                        return [4 /*yield*/, this.RoleDefineRepository.save(roleDefine)];
                    case 4:
                        roledata = _a.sent();
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserDefinationService.prototype.getUserDataTokenWise = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.formPostRepository.findOne(id)];
                    case 1: 
                    //check data
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //update user profile datails
    UserDefinationService.prototype.update_user = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var imgProfilePath, user, matches, response, ext, mimeType, buffer, file_size, file_name, file_path, details, curr_pass, newPassword, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        imgProfilePath = '';
                        user = new user_defination_entity_1.USERDEFINATION();
                        user['F_NAME'] = data.firstName;
                        user['L_NAME'] = data.LastName;
                        user['MOB_NO'] = data.phone;
                        user['EMAIL'] = data.email;
                        if (data.hasOwnProperty("imgbase64")) {
                            matches = data.imgbase64.match(/^data:(.+);base64,(.+)$/);
                            response = {};
                            if (!matches || matches.length !== 3) {
                                return [2 /*return*/, null];
                            }
                            if (!fs.existsSync('upload/profile')) {
                                fs.mkdirSync('upload/profile', { recursive: true });
                            }
                            response.type = matches[1];
                            response.data = Buffer.from(matches[2], 'base64');
                            ext = mime.extension(response.type);
                            mimeType = data.imgbase64.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0].split("/");
                            buffer = Buffer.from(matches[2]);
                            file_size = (buffer.length / 1e+6).toString();
                            file_name = (new Date()).getTime();
                            file_path = "upload/profile/".concat(file_name, ".").concat(mimeType[1]);
                            imgProfilePath = file_path;
                            fs.writeFile(file_path, response.data, 'base64', function (err) {
                                if (err)
                                    throw err;
                            });
                            user['PROFILE_PATH'] = imgProfilePath;
                        }
                        if (!(data.currentPassword != '' && data.newPassword != '' && data.confirmPassword != '')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.formPostRepository.findOne(data.id)];
                    case 1:
                        details = _a.sent();
                        console.log(data.currentPassword);
                        return [4 /*yield*/, bcrypt.hash(data.currentPassword, 10)];
                    case 2:
                        curr_pass = _a.sent();
                        if (!(curr_pass != details.PASSWORD)) return [3 /*break*/, 4];
                        console.log(data.newPassword);
                        return [4 /*yield*/, bcrypt.hash(data.newPassword, 10)];
                    case 3:
                        newPassword = _a.sent();
                        console.log(newPassword);
                        user['PASSWORD'] = newPassword;
                        return [3 /*break*/, 5];
                    case 4: throw new common_1.BadRequestException('Current password not matched');
                    case 5: return [4 /*yield*/, this.formPostRepository.update(data.id, user)];
                    case 6:
                        result = _a.sent();
                        result['PROFILE_PATH'] = user['PROFILE_PATH'];
                        result['id'] = data['id'];
                        console.log(result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    // async getNarrationCount() {
    //   // let data = await this.manager.query(`SELECT public.totalnarrations()`);
    //   // let data = await this.manager.query(`SELECT public.getacname[Vscheme]`);
    //   let data = await this.manager.query(`SELECT public.demo(p_num, p_msg)`);
    //   console.log(data);
    // }
    UserDefinationService.prototype.getNarrationCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manager.query("SELECT public.getacname('SB', 100001)")];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // async getNarrationCount(array) {
    //   console.log(array)
    //   let arr = array.toString().split(",");
    //   console.log(arr[0])
    //   var p_num = arr[0]
    //   var p_msg =arr[1]
    //   console.log(p_num,p_msg)
    //   // let data = await this.manager.query(`SELECT public.totalnarrations()`);
    //   // let data = await this.manager.query(`SELECT public.getacname[Vscheme]`);
    //   // let data = await this.manager.query(`SELECT public.testing_function(${p_num}, '${p_msg}')`);
    //   let data = await this.manager.query(`SELECT public.public.getacname('SB', 100001)`);
    //   console.log(data);
    // }
    UserDefinationService.prototype.resetPassword = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var status, id, curr_pass, details, newPassword, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = '';
                        return [4 /*yield*/, bcrypt.hash(data.currentPassword, 10)];
                    case 1:
                        curr_pass = _a.sent();
                        return [4 /*yield*/, this.formPostRepository.find({
                                where: {
                                    EMAIL: data.email
                                }
                            })];
                    case 2:
                        details = _a.sent();
                        if (!(details.length != 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, bcrypt.compare(data.currentPassword, details[0].PASSWORD)];
                    case 3:
                        if (!_a.sent()) return [3 /*break*/, 6];
                        id = details[0].id;
                        return [4 /*yield*/, bcrypt.hash(data.newPassword, 10)];
                    case 4:
                        newPassword = _a.sent();
                        user = new user_defination_entity_1.USERDEFINATION();
                        user['PASSWORD'] = newPassword;
                        return [4 /*yield*/, this.formPostRepository.update(id, user)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6: throw new common_1.BadRequestException('Current Password not matched');
                    case 7: return [3 /*break*/, 9];
                    case 8: throw new common_1.BadRequestException('User Details not Found Please try again');
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    //logout user
    UserDefinationService.prototype.logout = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.formPostRepository.update(data.id, { LOG_STATUS: '0' })];
            });
        });
    };
    UserDefinationService.prototype.editlocal = function (id) {
        return this.formPostRepository.findOne(id);
    };
    UserDefinationService = __decorate([
        (0, common_1.Injectable)(),
        __param(1, (0, typeorm_1.InjectRepository)(user_defination_entity_1.USERDEFINATION)),
        __param(2, (0, typeorm_1.InjectRepository)(role_master_entity_1.ROLEDATAMASTER)),
        __param(3, (0, typeorm_1.InjectRepository)(role_has_permission_entity_1.ROLEHASPERMISSION)),
        __param(4, (0, typeorm_1.InjectRepository)(role_define_entity_1.ROLE_DEFINE))
    ], UserDefinationService);
    return UserDefinationService;
}());
exports.UserDefinationService = UserDefinationService;
