import { ProofOfPurchase } from "./ProofOfPurchase";

export class TipoPago {

    id: number;
    name: string;
    usoBoleta: boolean;
    usoFactura: boolean;
    proofOfPurchase: ProofOfPurchase[];

}
