export interface PerfilUsuarioResponse {
    HEADER?:   Header;
    RESPONSE?: Response;
}

export interface Header {
    CODE?:          number;
    CODE_RESPONSE?: string;
    MESSAGE?:       string;
}

export interface Response {
    empresa_id?:         null;
    telefono?:           null;
    nombre?:             string;
    Apellido?:           null;
    Direccion?:          null;
    email?:              string;   
    imagenPerfil?:       string;
    genero?:             string;
    f_nacimiento?:       string;
    NroDocumento?:       null;  
    TipoDocumento?:      string;  
    estado?:             number;
}
