import { ProofOfPurchase } from "./ProofOfPurchase";
import { SystemUser } from "./SystemUser";

export class TurnoVenta {

    id: number;
    userRut: string;
    inicioTurno: Date;
    finTurno: Date;
    isActive: string;
    proofOfPurchase: ProofOfPurchase[];
    systemUser: SystemUser;

}
