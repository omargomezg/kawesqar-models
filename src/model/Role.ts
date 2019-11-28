import { RelationSystemUserRole } from "./RelationSystemUserRole";

export class Role {

    id: number;
    name: string;
    description: string;
    isActive: boolean;
    accesoVenta: boolean;
    valorDescuento: number;
    ventAdmin: boolean;
    relationSystemUserRoles: RelationSystemUserRole[];

}
