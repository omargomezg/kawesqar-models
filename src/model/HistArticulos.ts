import { Invoice } from "./Invoice";
import { Product } from "./Product";
import { ProofOfPurchase } from "./ProofOfPurchase";

export class HistArticulos {

    idTable: number;
    id: number;
    create: Date;
    ArtValor: number;
    expirationDate: Date;
    idSucursal: number;
    isActive: boolean;
    estadoUso: boolean;
    rutusuario: string;
    granelOriginal: number;
    idBodega: number;
    invoice: Invoice;
    proofOfPurchase: ProofOfPurchase;
    product: Product;

}
