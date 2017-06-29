
import { MessageService } from "./backendrepository/restfull/message.service";
import { ConsoleLoggerService } from "./logger/console-logger.service";
import { CrosJsonRequestService } from "./backendrepository/restfull/cros-json-request.service";
import { requestOptionsProvider } from "./core/default-request-options.service";
import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from "./core/global-error-handler";
import { FootballScheduleService } from "./backendrepository/restfull/football-schedule.service";

export const serviceInjectables: Array<any> = [
    ConsoleLoggerService, CrosJsonRequestService, MessageService, FootballScheduleService, requestOptionsProvider, {
        provide: ErrorHandler,
        useClass: GlobalErrorHandler
    }
];