
export interface DetalleEventoResponse {
    HEADER:   Header;
    RESPONSE: ListaDePlataformas[];
}

export interface Header {
    CODE:          number;
    CODE_RESPONSE: string;
    MESSAGE:       Message[];
}

export interface Message {
    msg: string;
}

export interface ListaDePlataformas {
    idPlataformaVenta: number;
    id_tipoPlataforma: number;
    evento_id:         number;
    urlWebLugar:       string;
    nombreEntrada:     string;
    idPlataforma:      number;
    nombrePlataforma:  string;
    estado:            number;
    iconos:            string;
}