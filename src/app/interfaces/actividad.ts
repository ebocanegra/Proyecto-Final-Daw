/*export interface Actividad{
    codigo?: string;
    nombre: string;
    codigo_monitor: string;
    informacion: string;
}*/

export interface Actividad {
    codigo?: number;
    nombre: string;
    codigo_monitor: number;
    informacion: string;
}

export interface RootObject {
    status: string;
    filasTotales: number;
    data: Actividad[];
}