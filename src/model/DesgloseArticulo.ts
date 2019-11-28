import { Branch } from "./Branch";
import { Invoice } from "./Invoice";
import { Product } from "./Product";
import { Store } from "./Store";
import { SystemUser } from "./SystemUser";

export class DesgloseArticulo {

    id: number;
    created: Date;
    artValor: number;
    isActive: boolean;
    expirationDate: Date;
    product: Product;
    invoice: Invoice;
    branch: Branch;
    estadoUso: boolean;
    user: SystemUser;
    granel: number;
    granelOriginal: number;
    store: Store;

}
