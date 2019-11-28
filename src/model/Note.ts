import { Invoice } from "./Invoice";
import { Product } from "./Product";

export class Note {
    id: number;
    invoice: Invoice;
    product: Product;
    note: string;
    created: Date;
    updated: Date;
}
