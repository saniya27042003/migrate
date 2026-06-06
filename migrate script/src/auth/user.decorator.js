"use strict";
exports.__esModule = true;
exports.CurrentUser = exports.User = void 0;
var common_1 = require("@nestjs/common");
var jwt = require("jsonwebtoken");
exports.User = (0, common_1.createParamDecorator)(function (data, ctx) {
    // const usertoken = ctx.req.headers.authorization;
    // const token = usertoken.split(' ');
    // const decoded = jwt.verify(token[1], 'secret-key');
    // console.log(decoded);
    var request = ctx.switchToHttp().getRequest();
    console.log(request.headers.authorization);
    var usertoken = request.headers.authorization;
    var token = usertoken.split(' ');
    var decoded = jwt.verify(token[1], 'secretKey');
    console.log(decoded);
    return request.user;
});
exports.CurrentUser = (0, common_1.createParamDecorator)(function (data, _a) {
    var root = _a[0], args = _a[1], ctx = _a[2], info = _a[3];
    return ctx.req.user;
});
