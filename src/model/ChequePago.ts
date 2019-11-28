import { Bank } from "./Bank";
import { ProofOfPurchase } from "./ProofOfPurchase";

export class ChequePago {

    id: number;
    number: number;
    amount: number;
    bank: Bank;
    telephone: string;
    nombrePersona: string;
    isActive: boolean;
    proofOfPurchase: ProofOfPurchase;

}
