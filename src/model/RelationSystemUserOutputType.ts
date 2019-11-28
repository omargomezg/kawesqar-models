import { OutputType } from "./OutputType";
import { SystemUser } from "./SystemUser";

/**
 * Relation between SystemUser and OutputType
 */
export class RelationSystemUserOutputType {

    id: number;
    outputType: OutputType;
    systemUser: SystemUser;
    isActive: boolean;
    isDefault: boolean;

}
