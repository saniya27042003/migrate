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
exports.MigrateController = void 0;
/* eslint-disable prettier/prettier */
var common_1 = require("@nestjs/common");
var MigrateController = /** @class */ (function () {
    function MigrateController(_service) {
        this._service = _service;
    }
    //check script
    MigrateController.prototype.Script = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.script()];
                    case 1: 
                    // return await this._service.script(data);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.ACMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.ACMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // @Post('/UPDATE')
    // async ACMASTER() {
    //     return await this._service.ACMASTER()
    // }
    MigrateController.prototype.ADVOCATEMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.ADVOCATEMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.AUTHORITYMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.AUTHORITYMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.BANKMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.BANKMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.BANKDETAILS = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.BANKDETAILS()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.CASTMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.CASTMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.CATEGORYMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.CATEGORYMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.CITYMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.CITYMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.COURTMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.COURTMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.BRANCHMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.BRANCHMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.DIRECTORMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.DIRECTORMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.DOCUMENTMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.DOCUMENTMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.TRANINPUTHEAD = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.TRANINPUTHEAD()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.DEPRCATEGORY = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.DEPRCATEGORY()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.DEPRRATE = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.DEPRRATE()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.INTRATELOAN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.INTRATELOAN()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.INTRATEPATSCHEMES = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.INTRATEPATSCHEMES()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.PREMATULESSRATE = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.PREMATULESSRATE()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.HEALTHMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.HEALTHMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.HOLIDAYSMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.HOLIDAYSMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.INDUSTRYMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.INDUSTRYMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.INSUARANCEMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.INSUARANCEMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.INTCATEGORYMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.INTCATEGORYMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.ITEMCATEGORYMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.ITEMCATEGORYMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.INTRATESBPG = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.INTRATESBPG()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.SECURITYMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.SECURITYMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.TDSRATE = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.TDSRATE()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.ITEMMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.ITEMMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.LOANSTAGEMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.LOANSTAGEMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.LOCKERRACKMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.LOCKERRACKMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.LOCKERSIZE = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.LOCKERSIZE()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.LOCKERMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.LOCKERMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.BALACATA = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.BALACATA()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.NARRATIONMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.NARRATIONMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.OCCUPATIONMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.OCCUPATIONMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.OPERATIONMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.OPERATIONMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.OWNBRANCHMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.OWNBRANCHMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.TDSFORMSUBMIT = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.TDSFORMSUBMIT()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.PREFIX = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.PREFIX()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.SYSPARA = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.SYSPARA()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.PRIORITYSECTORMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.PRIORITYSECTORMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.PGCOMMISSIONMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.PGCOMMISSIONMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.PRIORITYMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.PRIORITYMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.PURPOSEMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.PURPOSEMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.RECOVERYCLEARKMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.RECOVERYCLEARKMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.REPORTTYPEMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.REPORTTYPEMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.RISKCATEGORYMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.RISKCATEGORYMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.SALARYDIVISIONMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.SALARYDIVISIONMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.SUBSALARYMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.SUBSALARYMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.WEAKERMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.WEAKERMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.SCHEMAST = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var oracleConfig, postgresConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oracleConfig = body.oracle;
                        postgresConfig = body.postgres;
                        return [4 /*yield*/, this._service.SCHEMAST(oracleConfig, postgresConfig)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.IDMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.IDMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // @Post('/idmasterCorrection')
    // async idmasterCorrection() {
    //     return await this._service.idmasterCorrection()
    // }
    // @Post('/CUSTOMERADDRESS')
    // async CUSTOMERADDRESS() {
    //     return await this._service.CUSTOMERADDRESS()
    // }
    MigrateController.prototype.SHMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.SHmasterScript()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.DPMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.DPMASTERScript()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.PGMASTERSCRIPT = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.PGmasterScript()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.NPAMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.NPAMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.BOOKDEBTS = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.BOOKDEBTS()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.OTHERSECURITY = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.OTHERSECURITY()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.PLEDGESTOCK = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.PLEDGESTOCK()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.VEHICLE = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.VEHICLE()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.STOCKSTATEMENT = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.STOCKSTATEMENT()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.PLANTMACHINARY = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.PLANTMACHINARY()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.OWNDEPOSIT = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.OWNDEPOSIT()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.SECINSURANCE = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.SECINSURANCE()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.LANDBUILDING = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.LANDBUILDING()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.MARKETSHARE = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.MARKETSHARE()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.GOLDSILVER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.GOLDSILVER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.GOVTSECULIC = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.GOVTSECULIC()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.FIREPOLICY = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.FIREPOLICY()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.FURNITURE = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.FURNITURE()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.TDRECEIPTMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.TDRECEIPTMASTER()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.LNMASTER = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.lnmasterScript()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.DIVPAIDTRAN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.DIVPAIDTRAN()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.INTINSTRUCTION = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.INTINSTRUCTION()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.STANDINSTRUCTION = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.STANDINSTRUCTION()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.SPECIALINSTRUCTION = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.SPECIALINSTRUCTION()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.intrateTD = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.intrateTD()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.RENEWALHISTORY = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.RENEWALHISTORY()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.INTRATETDMULTI = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.INTRATETDMULTI()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // @Post('/PGMASTER')
    // async PGMASTER() {
    //     return await this._service.PGMASTER()
    // }
    MigrateController.prototype.ACCOTRAN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.ACCOTRAN()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.DEPOTRAN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.DEPOTRAN()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.LOANTRAN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.LOANTRAN()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.SHARETRAN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.SHARETRAN()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.PIGMYTRAN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.PIGMYTRAN()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.INTERESTTRAN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.INTERESTTRAN()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.TODTRAN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.TODTRAN()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.HISTORYTRAN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.HISTORYTRAN()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.HISTORYDIVIDEND = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.HISTORYDIVIDEND()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.DAILYTRAN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.DAILYTRAN()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.utility = function (data) {
        return this._service.updateBal(data);
    };
    MigrateController.prototype.IDmasterutility = function (data) {
        return this._service.shmasterrec(data);
    };
    MigrateController.prototype.UPDATEIDMASTER = function (data) {
        return this._service.updateIdmaster(data);
    };
    // migration.controller.ts
    MigrateController.prototype.checkSync = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.getSyncStatus(body.tableName, body.dependencies)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.checkSingleSync = function (tableName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.checkSingleTableSync(tableName)];
                    case 1: 
                    // This calls the single-table check method we discussed earlier
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MigrateController.prototype.connectOracleDB = function (config, dto) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._service.connectOracleDb(config, dto)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        (0, common_1.Post)('/script'),
        __param(0, (0, common_1.Body)())
    ], MigrateController.prototype, "Script");
    __decorate([
        (0, common_1.Post)('/ACMASTER')
    ], MigrateController.prototype, "ACMASTER");
    __decorate([
        (0, common_1.Post)('/ADVOCATEMASTER')
    ], MigrateController.prototype, "ADVOCATEMASTER");
    __decorate([
        (0, common_1.Post)('/AUTHORITYMASTER')
    ], MigrateController.prototype, "AUTHORITYMASTER");
    __decorate([
        (0, common_1.Post)('/BANKMASTER')
    ], MigrateController.prototype, "BANKMASTER");
    __decorate([
        (0, common_1.Post)('/BANKDETAILS')
    ], MigrateController.prototype, "BANKDETAILS");
    __decorate([
        (0, common_1.Post)('/CASTMASTER')
    ], MigrateController.prototype, "CASTMASTER");
    __decorate([
        (0, common_1.Post)('/CATEGORYMASTER')
    ], MigrateController.prototype, "CATEGORYMASTER");
    __decorate([
        (0, common_1.Post)('/CITYMASTER')
    ], MigrateController.prototype, "CITYMASTER");
    __decorate([
        (0, common_1.Post)('/COURTMASTER')
    ], MigrateController.prototype, "COURTMASTER");
    __decorate([
        (0, common_1.Post)('/BRANCHMASTER')
    ], MigrateController.prototype, "BRANCHMASTER");
    __decorate([
        (0, common_1.Post)('/DIRECTORMASTER')
    ], MigrateController.prototype, "DIRECTORMASTER");
    __decorate([
        (0, common_1.Post)('/DOCUMENTMASTER')
    ], MigrateController.prototype, "DOCUMENTMASTER");
    __decorate([
        (0, common_1.Post)('/TRANINPUTHEAD')
    ], MigrateController.prototype, "TRANINPUTHEAD");
    __decorate([
        (0, common_1.Post)('/DEPRCATEGORY')
    ], MigrateController.prototype, "DEPRCATEGORY");
    __decorate([
        (0, common_1.Post)('/DEPRRATE')
    ], MigrateController.prototype, "DEPRRATE");
    __decorate([
        (0, common_1.Post)('/INTRATELOAN')
    ], MigrateController.prototype, "INTRATELOAN");
    __decorate([
        (0, common_1.Post)('/INTRATEPATSCHEMES')
    ], MigrateController.prototype, "INTRATEPATSCHEMES");
    __decorate([
        (0, common_1.Post)('/PREMATULESSRATE')
    ], MigrateController.prototype, "PREMATULESSRATE");
    __decorate([
        (0, common_1.Post)('/HEALTHMASTER')
    ], MigrateController.prototype, "HEALTHMASTER");
    __decorate([
        (0, common_1.Post)('/HOLIDAYSMASTER')
    ], MigrateController.prototype, "HOLIDAYSMASTER");
    __decorate([
        (0, common_1.Post)('/INDUSTRYMASTER')
    ], MigrateController.prototype, "INDUSTRYMASTER");
    __decorate([
        (0, common_1.Post)('/INSUARANCEMASTER')
    ], MigrateController.prototype, "INSUARANCEMASTER");
    __decorate([
        (0, common_1.Post)('/INTCATEGORYMASTER')
    ], MigrateController.prototype, "INTCATEGORYMASTER");
    __decorate([
        (0, common_1.Post)('/ITEMCATEGORYMASTER')
    ], MigrateController.prototype, "ITEMCATEGORYMASTER");
    __decorate([
        (0, common_1.Post)('/INTRATESBPG')
    ], MigrateController.prototype, "INTRATESBPG");
    __decorate([
        (0, common_1.Post)('/SECURITYMASTER')
    ], MigrateController.prototype, "SECURITYMASTER");
    __decorate([
        (0, common_1.Post)('/TDSRATE')
    ], MigrateController.prototype, "TDSRATE");
    __decorate([
        (0, common_1.Post)('/ITEMMASTER')
    ], MigrateController.prototype, "ITEMMASTER");
    __decorate([
        (0, common_1.Post)('/LOANSTAGEMASTER')
    ], MigrateController.prototype, "LOANSTAGEMASTER");
    __decorate([
        (0, common_1.Post)('/LOCKERRACKMASTER')
    ], MigrateController.prototype, "LOCKERRACKMASTER");
    __decorate([
        (0, common_1.Post)('/LOCKERSIZE')
    ], MigrateController.prototype, "LOCKERSIZE");
    __decorate([
        (0, common_1.Post)('/LOCKERMASTER')
    ], MigrateController.prototype, "LOCKERMASTER");
    __decorate([
        (0, common_1.Post)('/BALACATA')
    ], MigrateController.prototype, "BALACATA");
    __decorate([
        (0, common_1.Post)('/NARRATIONMASTER')
    ], MigrateController.prototype, "NARRATIONMASTER");
    __decorate([
        (0, common_1.Post)('/OCCUPATIONMASTER')
    ], MigrateController.prototype, "OCCUPATIONMASTER");
    __decorate([
        (0, common_1.Post)('/OPERATIONMASTER')
    ], MigrateController.prototype, "OPERATIONMASTER");
    __decorate([
        (0, common_1.Post)('/OWNBRANCHMASTER')
    ], MigrateController.prototype, "OWNBRANCHMASTER");
    __decorate([
        (0, common_1.Post)('/TDSFORMSUBMIT')
    ], MigrateController.prototype, "TDSFORMSUBMIT");
    __decorate([
        (0, common_1.Post)('/PREFIX')
    ], MigrateController.prototype, "PREFIX");
    __decorate([
        (0, common_1.Post)('/SYSPARA')
    ], MigrateController.prototype, "SYSPARA");
    __decorate([
        (0, common_1.Post)('/PRIORITYSECTORMASTER')
    ], MigrateController.prototype, "PRIORITYSECTORMASTER");
    __decorate([
        (0, common_1.Post)('/PGCOMMISSIONMASTER')
    ], MigrateController.prototype, "PGCOMMISSIONMASTER");
    __decorate([
        (0, common_1.Post)('/PRIORITYMASTER')
    ], MigrateController.prototype, "PRIORITYMASTER");
    __decorate([
        (0, common_1.Post)('/PURPOSEMASTER')
    ], MigrateController.prototype, "PURPOSEMASTER");
    __decorate([
        (0, common_1.Post)('/RECOVERYCLEARKMASTER')
    ], MigrateController.prototype, "RECOVERYCLEARKMASTER");
    __decorate([
        (0, common_1.Post)('/REPORTTYPEMASTER')
    ], MigrateController.prototype, "REPORTTYPEMASTER");
    __decorate([
        (0, common_1.Post)('/RISKCATEGORYMASTER')
    ], MigrateController.prototype, "RISKCATEGORYMASTER");
    __decorate([
        (0, common_1.Post)('/SALARYDIVISIONMASTER')
    ], MigrateController.prototype, "SALARYDIVISIONMASTER");
    __decorate([
        (0, common_1.Post)('/SUBSALARYMASTER')
    ], MigrateController.prototype, "SUBSALARYMASTER");
    __decorate([
        (0, common_1.Post)('/WEAKERMASTER')
    ], MigrateController.prototype, "WEAKERMASTER");
    __decorate([
        (0, common_1.Post)('/SCHEMAST'),
        __param(0, (0, common_1.Body)())
    ], MigrateController.prototype, "SCHEMAST");
    __decorate([
        (0, common_1.Post)('/IDMASTER')
    ], MigrateController.prototype, "IDMASTER");
    __decorate([
        (0, common_1.Post)('/SHMASTER')
    ], MigrateController.prototype, "SHMASTER");
    __decorate([
        (0, common_1.Post)('/DPMASTER')
    ], MigrateController.prototype, "DPMASTER");
    __decorate([
        (0, common_1.Post)('/PGMASTER')
    ], MigrateController.prototype, "PGMASTERSCRIPT");
    __decorate([
        (0, common_1.Post)('/NPAMASTER')
    ], MigrateController.prototype, "NPAMASTER");
    __decorate([
        (0, common_1.Post)('/BOOKDEBTS')
    ], MigrateController.prototype, "BOOKDEBTS");
    __decorate([
        (0, common_1.Post)('/OTHERSECURITY')
    ], MigrateController.prototype, "OTHERSECURITY");
    __decorate([
        (0, common_1.Post)('/PLEDGESTOCK')
    ], MigrateController.prototype, "PLEDGESTOCK");
    __decorate([
        (0, common_1.Post)('/VEHICLE')
    ], MigrateController.prototype, "VEHICLE");
    __decorate([
        (0, common_1.Post)('/STOCKSTATEMENT')
    ], MigrateController.prototype, "STOCKSTATEMENT");
    __decorate([
        (0, common_1.Post)('/PLANTMACHINARY')
    ], MigrateController.prototype, "PLANTMACHINARY");
    __decorate([
        (0, common_1.Post)('/OWNDEPOSIT')
    ], MigrateController.prototype, "OWNDEPOSIT");
    __decorate([
        (0, common_1.Post)('/SECINSURANCE')
    ], MigrateController.prototype, "SECINSURANCE");
    __decorate([
        (0, common_1.Post)('/LANDBUILDING')
    ], MigrateController.prototype, "LANDBUILDING");
    __decorate([
        (0, common_1.Post)('/MARKETSHARE')
    ], MigrateController.prototype, "MARKETSHARE");
    __decorate([
        (0, common_1.Post)('/GOLDSILVER')
    ], MigrateController.prototype, "GOLDSILVER");
    __decorate([
        (0, common_1.Post)('/GOVTSECULIC')
    ], MigrateController.prototype, "GOVTSECULIC");
    __decorate([
        (0, common_1.Post)('/FIREPOLICY')
    ], MigrateController.prototype, "FIREPOLICY");
    __decorate([
        (0, common_1.Post)('/FURNITURE')
    ], MigrateController.prototype, "FURNITURE");
    __decorate([
        (0, common_1.Post)('/TDRECEIPTMASTER')
    ], MigrateController.prototype, "TDRECEIPTMASTER");
    __decorate([
        (0, common_1.Post)('/LNMASTER')
    ], MigrateController.prototype, "LNMASTER");
    __decorate([
        (0, common_1.Post)('/DIVPAIDTRAN')
    ], MigrateController.prototype, "DIVPAIDTRAN");
    __decorate([
        (0, common_1.Post)('/INTINSTRUCTION')
    ], MigrateController.prototype, "INTINSTRUCTION");
    __decorate([
        (0, common_1.Post)('/STANDINSTRUCTION')
    ], MigrateController.prototype, "STANDINSTRUCTION");
    __decorate([
        (0, common_1.Post)('/SPECIALINSTRUCTION')
    ], MigrateController.prototype, "SPECIALINSTRUCTION");
    __decorate([
        (0, common_1.Post)('/intrateTD')
    ], MigrateController.prototype, "intrateTD");
    __decorate([
        (0, common_1.Post)('/RENEWALHISTORY')
    ], MigrateController.prototype, "RENEWALHISTORY");
    __decorate([
        (0, common_1.Post)('/INTRATETDMULTI')
    ], MigrateController.prototype, "INTRATETDMULTI");
    __decorate([
        (0, common_1.Post)('/ACCOTRAN')
    ], MigrateController.prototype, "ACCOTRAN");
    __decorate([
        (0, common_1.Post)('/DEPOTRAN')
    ], MigrateController.prototype, "DEPOTRAN");
    __decorate([
        (0, common_1.Post)('/LOANTRAN')
    ], MigrateController.prototype, "LOANTRAN");
    __decorate([
        (0, common_1.Post)('/SHARETRAN')
    ], MigrateController.prototype, "SHARETRAN");
    __decorate([
        (0, common_1.Post)('/PIGMYTRAN')
    ], MigrateController.prototype, "PIGMYTRAN");
    __decorate([
        (0, common_1.Post)('/INTERESTTRAN')
    ], MigrateController.prototype, "INTERESTTRAN");
    __decorate([
        (0, common_1.Post)('/TODTRAN')
    ], MigrateController.prototype, "TODTRAN");
    __decorate([
        (0, common_1.Post)('/HISTORYTRAN')
    ], MigrateController.prototype, "HISTORYTRAN");
    __decorate([
        (0, common_1.Post)('/HISTORYDIVIDEND')
    ], MigrateController.prototype, "HISTORYDIVIDEND");
    __decorate([
        (0, common_1.Post)('/DAILYTRAN')
    ], MigrateController.prototype, "DAILYTRAN");
    __decorate([
        (0, common_1.Post)('/updateBal'),
        __param(0, (0, common_1.Body)())
    ], MigrateController.prototype, "utility");
    __decorate([
        (0, common_1.Post)('/IDmasterutility'),
        __param(0, (0, common_1.Body)())
    ], MigrateController.prototype, "IDmasterutility");
    __decorate([
        (0, common_1.Post)('/IDMASTER'),
        __param(0, (0, common_1.Body)())
    ], MigrateController.prototype, "UPDATEIDMASTER");
    __decorate([
        (0, common_1.Post)('check-sync'),
        __param(0, (0, common_1.Body)())
    ], MigrateController.prototype, "checkSync");
    __decorate([
        (0, common_1.Get)('check-single-sync/:tableName'),
        __param(0, (0, common_1.Param)('tableName'))
    ], MigrateController.prototype, "checkSingleSync");
    __decorate([
        (0, common_1.Post)('/connectOracleDB'),
        __param(0, (0, common_1.Body)())
    ], MigrateController.prototype, "connectOracleDB");
    MigrateController = __decorate([
        (0, common_1.Controller)('migrate')
    ], MigrateController);
    return MigrateController;
}());
exports.MigrateController = MigrateController;
