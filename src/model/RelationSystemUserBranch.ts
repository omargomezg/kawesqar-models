import { Branch } from "./Branch";
import { SystemUser } from "./SystemUser";

export class RelationSystemUserBranch {

    id: number;
    isActive: boolean;
    branch: Branch;
    systemUser: SystemUser;

}
