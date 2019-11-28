import { ProofOfPurchase } from "./ProofOfPurchase";
import { CostCenter } from "./CostCenter";

export class CostCenterChild {

    id: number;
    name: string;
    isActive: boolean;
    costCenter: CostCenter;
    proofOfPurchase: ProofOfPurchase[];

}
