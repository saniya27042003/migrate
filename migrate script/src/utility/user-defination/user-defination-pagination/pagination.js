"use strict";
exports.__esModule = true;
exports.Pagination = void 0;
var Pagination = /** @class */ (function () {
    function Pagination(paginationResults) {
        this.data = paginationResults.data;
        this.recordsFiltered = paginationResults.data.length;
        this.recordsTotal = paginationResults.recordsTotal;
    }
    return Pagination;
}());
exports.Pagination = Pagination;
