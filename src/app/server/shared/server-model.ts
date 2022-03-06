import { Status } from "./status";

export interface Server {
    ipAddress: string;
    name: string;
    memory: string;
    type: string;
    status: Status;
    ping: boolean;
}