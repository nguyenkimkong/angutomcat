"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var cros_json_request_service_1 = require("./cros-json-request.service");
describe('CrosJsonRequestService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [cros_json_request_service_1.CrosJsonRequestService]
        });
    });
    it('should be created', testing_1.inject([cros_json_request_service_1.CrosJsonRequestService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=cros-json-request.service.spec.js.map