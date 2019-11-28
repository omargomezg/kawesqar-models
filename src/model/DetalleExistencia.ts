import { Existencia } from "./Existencia";
import { Product } from "./Product";
import { Store } from "./Store";

export class DetalleExistencia {

    idDetalleExistencia: number;
    cantidad: number;
    esGranel: boolean;
    valorUnitario: number;
    existencia: Existencia;
    product: Product;
    store: Store;

}
