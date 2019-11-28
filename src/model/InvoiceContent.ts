import { Invoice } from "./Invoice";
import { Product } from "./Product";

export class InvoiceContent {

    id: number;
    amount: number;
    quantity: number;
    invoice: Invoice;
    product: Product;

}
