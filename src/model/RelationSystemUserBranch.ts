import { Branch } from './Branch';
import { SystemUser } from './SystemUser';

export class RelationSystemUserBranch {
  public id: number;
  public isActive: boolean;
  public isSelected: boolean;
  public branch: Branch;
  public systemUser: SystemUser;
}
