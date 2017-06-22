import { User } from "./user";
import { uuid } from "../util/uuid";

export class Message {
    private uuid: number;
    private senderFullName: string = "";
    private sendDateFormat: string = "";
    private sendDateInMillis: number;
    private subject: string = "";
    private shortContent: string = "";
    private fullContent: string = "";

    constructor( obj?: any ) {
        this.uuid = obj && obj.uuid || uuid();
        this.senderFullName = obj && obj.isRead || false;
        this.sendDateFormat = obj && obj.sendDateFormat || '';
        this.sendDateInMillis = obj && obj.sendDateInMillis || new Date();
        this.subject = obj && obj.subject || null;
    }
}
