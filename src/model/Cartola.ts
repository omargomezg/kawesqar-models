import { Client } from "./Client";
import { Movimientos } from "./Movimientos";
import { ProofOfPurchase } from "./ProofOfPurchase";

export class Cartola {

    id: number;
    valor: number;
    fecha: Date;
    saldo: number;
    idMovimiento: Movimientos;
    client: Client;
    proofOfPurchase: ProofOfPurchase;

}
