
import { MessageService } from "./backendrepository/restfull/message.service";
import { ConsoleLoggerService } from "./logger/console-logger.service";
import { CrosJsonRequestService } from "./backendrepository/restfull/cros-json-request.service";
import { requestOptionsProvider } from "./core/default-request-options.service";

export const serviceInjectables: Array<any> = [
    ConsoleLoggerService, CrosJsonRequestService, MessageService, requestOptionsProvider
];