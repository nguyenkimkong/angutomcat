import { environment } from "../../../../environments/environment";
import { URLSearchParams } from "@angular/http";

let G_CONFIG = environment.GLOBAL_CONFIG;
let MESSAGE_API = G_CONFIG.backendrepositoryurl + G_CONFIG.serviceapi.message;
let COLLEGE_FOOTBALLS_API = G_CONFIG.backendrepositoryurl + G_CONFIG.serviceapi.collegefootball;

//scheduleservice/getschedule
export const SERVICE_CONSTANTS = {
    UNREAD_MESSAGE_COUNT_API: MESSAGE_API + '/unreadMessageCount',
    QUERY_MESSAGES_API: MESSAGE_API + '/getMessages',
    COLLEGE_FOOTBALL_GET_SCHEDULE: COLLEGE_FOOTBALLS_API + '/getschedule',

}


export function jsonp_params(): URLSearchParams {
    let params = new URLSearchParams();
    params.set( 'callback', 'JSONP_CALLBACK' );

    return params
} 
