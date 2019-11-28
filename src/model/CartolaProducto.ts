import { MovimientoArticulo } from "./movimientoArticulo";
import { Product } from "./Product";

export class CartolaProducto {

    id: number;
    fecha: Date;
    cantidad: number;
    valor: number;
    saldo: number;
    idSucursal: number;
    comments: string;
    product: Product;
    idMovimiento: MovimientoArticulo;

}
