import { CostCenterChild } from "./CostCenterChild";
import { RelationClientCostCenter } from "./RelationClientCostCenter";

export class CostCenter {

    id: number;
    name: string;
    isActive: boolean;
    child: CostCenterChild[];
    relationClientCostCenter: RelationClientCostCenter[];

}
