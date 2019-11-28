import { DesgloseArticulo } from "./DesgloseArticulo";
import { DetalleExistencia } from "./DetalleExistencia";
import { RelationStoreBranch } from "./RelationStoreBranch";
import { ShoppingCartContent } from "./ShoppingCartContent";
import { TempArt } from "./TempArt";
import { ProofOfPurchaseDetail } from "./ProofOfPurchaseDetail";

export class Store {

    id: number = 0;
    description: string;
    proofOfPurchaseDetail: ProofOfPurchaseDetail[];
    branches: RelationStoreBranch[];
    desgloseArticulos: DesgloseArticulo[];
    detalleExistencias: DetalleExistencia[];
    tempArts: TempArt[];
    content: ShoppingCartContent[];

}
