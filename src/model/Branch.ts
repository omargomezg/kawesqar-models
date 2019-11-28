import { Commune } from "./Commune";
import { DesgloseArticulo } from "./DesgloseArticulo";
import { Invoice } from "./Invoice";
import { ProofOfPurchase } from "./ProofOfPurchase";
import { RelationFamilyBranch } from "./RelationFamilyBranch";
import { RelationStoreBranch } from "./RelationStoreBranch";
import { RelationSystemUserBranch } from "./RelationSystemUserBranch";
import { ShoppingCartContent } from "./ShoppingCartContent";
import { SystemUser } from "./SystemUser";
import { TempArt } from "./TempArt";

export class Branch {

    id: number;
    rut: string;
    name: string;
    address: string;
    commune: Commune;
    telephone: string;
    rutRepLegal: string;
    nombreRepLegal: string;
    fax: string;
    Giro: string;
    registroContado: boolean;
    numInicialRegContado: number;
    legalRepresentative: SystemUser;
    stores: RelationStoreBranch[];
    proofOfPurchase: ProofOfPurchase[];
    relationSystemUserBranch: RelationSystemUserBranch[];
    desgloseArticulos: DesgloseArticulo[];
    invoices: Invoice[];
    relationFamilyBranches: RelationFamilyBranch[];
    tempArts: TempArt[];
    shoppingCartContents: ShoppingCartContent[];

}
