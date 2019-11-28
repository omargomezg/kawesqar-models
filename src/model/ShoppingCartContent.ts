import { Product } from "./Product";
import { ShoppingCart } from "./ShoppingCart";
import { Store } from "./Store";

export class ShoppingCartContent {

    id: number;
    products: Product;
    cantidad: number;
    rutUsuario: string;
    valor: number;
    estado: boolean;
    idArticuloID: number;
    store: Store;
    content: ShoppingCart;
}
