/*export interface Monitor{
    codigo?: string;
    nombre: string;
    nif: string;
    direccion: string;
    correo: string;
    telefono: string;
    contrasena: string;
}*/


export interface Monitor {
    codigo?: number;
    nombre: string;
    nif: string;
    direccion: string;
    correo: string;
    telefono: string;
    contrasena: string;
}

export interface RootObject {
    status: string;
    filasTotales: number;
    data: Monitor[];
}

