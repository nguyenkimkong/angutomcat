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
var cros_json_request_service_1 = require("app/service/backendrepository/restfull/cros-json-request.service");
var logger_service_1 = require("app/service/logger/logger.service");
var MessageService = (function () {
    function MessageService(crosjsonp, logger) {
        this.crosjsonp = crosjsonp;
        this.logger = logger;
        logger.log("Instance MessageService", crosjsonp);
    }
    return MessageService;
}());
MessageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof cros_json_request_service_1.CrosJsonRequestService !== "undefined" && cros_json_request_service_1.CrosJsonRequestService) === "function" && _a || Object, typeof (_b = typeof logger_service_1.LoggerService !== "undefined" && logger_service_1.LoggerService) === "function" && _b || Object])
], MessageService);
exports.MessageService = MessageService;
var _a, _b;
//# sourceMappingURL=message.service.js.map