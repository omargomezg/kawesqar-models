import { Branch } from "./Branch";
import { Client } from "./Client";
import { Provincia } from "./provincia";
import { Supplier } from "./Supplier";

export class Commune {

    code: number;
    name: string;
    father: Provincia;
    clients: Client[];
    branches: Branch[];
    supplier: Supplier[];

}
