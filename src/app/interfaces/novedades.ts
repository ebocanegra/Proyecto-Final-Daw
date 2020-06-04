export interface Novedad {
    codigo?: number;
    titulo: string;
    contenido: string;
    fecha: string;
    codigo_monitor: number;
}

export interface RootObject {
    status: string;
    filasTotales: number;
    data: Novedad[];
}