export interface EventosResponse {
    HEADER:   Header;
    RESPONSE: Evento[];
}

export interface Header {
    CODE:          number;
    CODE_RESPONSE: string;
    MESSAGE:       string;
}


export interface Evento {
    esfavorito:     boolean;
    favorito:     null;
    HoraInicio:   string;
    HoraFinal:    string;
    FechaInicio:  string;
    ideventos:    number;
    titulo:       string;
    NombreLocal:  string;
    urlFuente:    string;
    url:          string;
    Monto:        number;
    Destacado:    number;
    categoria_id: number;
    EsGratis:     string;
    Distrito:     string;
    estado:       null;
    idfecha:      number;
    usuario_id:   number;
    estaEnRangoHora:boolean;
}


export interface DetalleDelEventoResponse {
    HEADER:   Header;
    RESPONSE: DetalleDelEvento[];
}
export interface DetalleDelEvento {
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


export interface parametrosFiltroRequest {
    categoria:                   number;
    TipoEvento:                  number;
    Ubicacion:                   string;
    horaInicioFin:               string;
    fecha:                       string;
    busqueda:                    string;
    cantPage:                    number;
    page:                       number;    

}