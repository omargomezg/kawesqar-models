import { Role } from "./Role";
import { SystemUser } from "./SystemUser";

export class RelationSystemUserRole {

    id: number;
    isActive: boolean;
    user: SystemUser;
    role: Role;

}
