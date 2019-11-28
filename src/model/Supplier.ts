import { Commune } from "./Commune";
import { Invoice } from "./Invoice";

export class Supplier {

    rut: string;
    ProvNombre: string;
    telephone: string;
    ProvFax: string;
    mobile: string;
    address: string;
    email: string;
    webSite: string;
    isActive: boolean;
    commune: Commune;
    ProvAbreviacion: string;
    invoices: Invoice[];

}
