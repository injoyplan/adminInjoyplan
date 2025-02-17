// Generated by https://quicktype.io

import { User } from "./req-user-response-interface";

export interface LoginResponse {
    HEADER:   Header;
    RESPONSE: resultado;
}

export interface Header {
    CODE:          number;
    CODE_RESPONSE: string;
    MESSAGE:       Message[];
}

export interface Message {
    msg:   string;
    param: string;
}

export interface resultado {
    token: string;
    user:  User;
}
