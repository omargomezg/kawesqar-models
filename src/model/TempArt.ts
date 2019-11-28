import { Branch } from "./Branch";
import { Invoice } from "./Invoice";
import { Product } from "./Product";
import { Store } from "./Store";

export class TempArt {

    id: number;
    created: Date;
    amount: number;
    ArtCantidad: number;
    expirationDate: Date;
    product: Product;
    invoice: Invoice;
    branch: Branch;
    store: Store;

}
