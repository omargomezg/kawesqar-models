import { DetalleExistencia } from "./DetalleExistencia";

export class Existencia {

    id: number;
    fecha: Date;
    rutUsuario: string;
    idSucursal: number;
    estado: boolean;
    detalleExistencias: DetalleExistencia[];

}
