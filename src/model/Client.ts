import { Cartola } from "./Cartola";
import { ClientType } from "./ClientType";
import { Commune } from "./Commune";
import { Person } from "./Person";
import { ProofOfPurchase } from "./ProofOfPurchase";

export class Client extends Person {

    Fax: string;
    mobile: string;
    address: string;
    MaxCredito: number;
    permiteVentaCredito: boolean;
    permiteVentaFactura: boolean;
    fantasyName: string;
    commune: Commune;
    giro: string;
    typeOfClient: ClientType;
    cartolas: Cartola[];
    proofOfPurchase: ProofOfPurchase[];

}
