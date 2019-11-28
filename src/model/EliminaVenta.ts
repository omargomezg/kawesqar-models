import { ProofOfPurchase } from "./ProofOfPurchase";
import { SystemUser } from "./SystemUser";

export class EliminaVenta {

    id: number;
    date: Date;
    description: string;
    proofOfPurchase: ProofOfPurchase;
    systemUser: SystemUser;

}
