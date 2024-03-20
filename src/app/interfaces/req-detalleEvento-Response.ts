export interface DetalleEventoResponse {
    HEADER:   Header;
    RESPONSE: Response[];
}

export interface Header {
    CODE:          number;
    CODE_RESPONSE: string;
    MESSAGE:       Message[];
}

export interface Message {
    msg: string;
}

export interface Response {
    data:                Data[];
    dataFecha:           DataFecha[];
    dataPlataformaVenta: DataPlataformaVenta[];
}

export interface Data {
    favorito:                   null;
    ideventos:                  number;
    titulo:                     string;
    categoria_id:               number;
    EsGratis:                   string;
    direccion:                  string;
    Numero:                     string;
    latitud_longitud:           string;
    tipoMoneda:                 string;
    descripcionEvento:          string;
    Departamento:               string;
    Distrito:                   string;
    Provincia:                  string;
    NombreLocal:                string;
    DescripcionLocal:           string;
    Destacado:                  number;
    urlFuente:                  string;
    tipoEntrada:                number;
    usuario_id:                 number;
    estado:                     number;
    created_at:                 null;
    updated_at:                 null;
    idfecha:                    number;
    evento_id:                  number;
    FechaInicio:                string;
    idFecha_horario:            number;
    fecha_id:                   string;
    HoraInicio:                 string;
    HoraFinal:                  string;
    Estado:                     number;
    idimagenes:                 number;
    nombreImagen:               string;
    url:                        string;
    formato:                    string;
    Tipo:                       null;
    idEntradas:                 number;
    CantidadDisponiblexUsuario: number;
    CantidadDisponible:         number;
    nombreEntrada:              string;
    Monto:                      number;
    update_at:                  null;
}

export interface DataFecha {
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

export interface DataPlataformaVenta {
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
