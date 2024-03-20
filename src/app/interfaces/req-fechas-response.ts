
export interface FechaResponse {
    HEADER:   Header;
    RESPONSE: ListaFecha[];
}

export interface Header {
    CODE:          number;
    CODE_RESPONSE: string;
    MESSAGE:       Message[];
}

export interface Message {
    msg: string;
}



export interface ListaFecha {
    idfecha:         number;
    evento_id:       number;
    FechaInicio:     string;
    usuario_id:      number;
    estado:          number;
    idFecha_horario: number;
    fecha_id:        string;
    HoraInicio:      string;
    HoraFinal:       string;
    Estado:          number;
    monto:           number;
}





