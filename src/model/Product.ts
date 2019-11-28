import { CartolaProducto } from "./CartolaProducto";
import { DesgloseArticulo } from "./DesgloseArticulo";
import { DetalleExistencia } from "./DetalleExistencia";
import { Family } from "./Family";
import { HistArticulos } from "./HistArticulos";
import { InvoiceContent } from "./InvoiceContent";
import { Measure } from "./Measure";
import { Note } from "./Note";
import { ProofOfPurchaseDetail } from "./ProofOfPurchaseDetail";
import { ShoppingCartContent } from "./ShoppingCartContent";
import { TempArt } from "./TempArt";

export class Product {

    id: string;
    isActive: boolean;
    Alerta: number;
    estadoAlerta: boolean;
    vencimiento: boolean;
    Notas: string;
    ganancia: number;
    precioGranel: number;
    name: string;
    usaInventario: boolean;
    folio: number;
    imgFile: any;
    imgContentType: string;
    family: Family;
    measure: Measure;
    idMedidaGranel: Measure;
    notes: Note[];
    cartolaProductos: CartolaProducto[];
    desgloseArticulos: DesgloseArticulo[];
    detalleExistencias: DetalleExistencia[];
    invoiceContents: InvoiceContent[];
    proofOfPurchaseDetail: ProofOfPurchaseDetail[];
    histArticuloss: HistArticulos[];
    tempArts: TempArt[];
    shoppingCartContent: ShoppingCartContent[];

}
