import { Branch } from "./Branch";
import { DesgloseArticulo } from "./DesgloseArticulo";
import { HistArticulos } from "./HistArticulos";
import { InvoiceContent } from "./InvoiceContent";
import { Supplier } from "./Supplier";
import { SystemUser } from "./SystemUser";
import { TempArt } from "./TempArt";
import { tipoDocIn } from "./tipoDocIn";
import { Note } from "./Note";
import { Product } from "./Product";

export class Invoice {

    id: number;
    number: string;
    date: Date;
    creation: Date;
    estadoUso: string;
    valImpuesto: number;
    notas: string;
    supplier: Supplier;
    idTipoDocIn: tipoDocIn;
    systemUser: SystemUser;
    branch: Branch;
    desgloseArticulos: DesgloseArticulo[];
    content: InvoiceContent[];
    histArticuloss: HistArticulos[];
    tempArts: TempArt[];
    notes: Note[];
    products: Product[];

}
