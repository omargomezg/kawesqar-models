import { Branch } from './Branch';
import { DesgloseArticulo } from './DesgloseArticulo';
import { EliminaVenta } from './EliminaVenta';
import { Invoice } from './Invoice';
import { Person } from './Person';
import { RelationSystemUserBranch } from './RelationSystemUserBranch';
import { RelationSystemUserOutputType } from './RelationSystemUserOutputType';
import { RelationSystemUserRole } from './RelationSystemUserRole';
import { ShoppingCart } from './ShoppingCart';
import { TurnoVenta } from './TurnoVenta';
import { UserMenu } from './UserMenu';

export class SystemUser extends Person {
  isActive: boolean;
  password: any;
  userName: string;
  created: Date;
  updated: Date;
  imagenPerfil: any;
  imagenTipo: string;
  salidaVenta: boolean;
  salidaFactura: boolean;
  salidaEmpleados: boolean;
  sendToOtherBranch: boolean;
  credito: boolean;
  discount: boolean;
  branch: Branch;
  shoppingCart: ShoppingCart;
  relationSystemUserRoles: RelationSystemUserRole[];
  relationSystemUserBranch: RelationSystemUserBranch[];
  desgloseArticulos: DesgloseArticulo[];
  eliminaVentas: EliminaVenta[];
  invoices: Invoice[];
  menuUsuarios: UserMenu[];
  relationSystemUserOutputType: RelationSystemUserOutputType[];
  turnoVenta: TurnoVenta[];

  constructor() {
    super();
  }
}
