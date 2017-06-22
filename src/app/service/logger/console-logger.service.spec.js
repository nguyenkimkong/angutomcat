"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var console_logger_service_1 = require("./console-logger.service");
describe('ConsoleLoggerService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [console_logger_service_1.ConsoleLoggerService]
        });
    });
    it('should be created', testing_1.inject([console_logger_service_1.ConsoleLoggerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=console-logger.service.spec.js.map