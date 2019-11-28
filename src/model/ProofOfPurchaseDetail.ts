import { Product } from "./Product";
import { ProofOfPurchase } from "./ProofOfPurchase";
import { Store } from "./Store";

export class ProofOfPurchaseDetail {

    id: number;
    quantity: number;
    valorTotal: number;
    vGranel: boolean;
    idArticuloID: number;
    vCosto: number;
    f: boolean;
    store: Store;
    proofOfPurchase: ProofOfPurchase;
    product: Product;

}
