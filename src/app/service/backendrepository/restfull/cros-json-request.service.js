"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
var CrosJsonRequestService = (function () {
    function CrosJsonRequestService(jsonp) {
        this.jsonp = jsonp;
    }
    CrosJsonRequestService.prototype.getRecords = function (endpointAPI, itemPerPage, pageIndex) {
        if (itemPerPage === void 0) { itemPerPage = 25; }
        if (pageIndex === void 0) { pageIndex = 0; }
        var params = new URLSearchParams();
        params.set('itemPerPage', itemPerPage.toString());
        params.set('pageIndex', pageIndex.toString());
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp.get(endpointAPI, { params: params }).map(this.extractData);
    };
    CrosJsonRequestService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    CrosJsonRequestService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return CrosJsonRequestService;
}());
CrosJsonRequestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Jsonp])
], CrosJsonRequestService);
exports.CrosJsonRequestService = CrosJsonRequestService;
//# sourceMappingURL=cros-json-request.service.js.map