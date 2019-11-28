import { ChequePago } from "./ChequePago";
import { Payment } from "./Payment";

export class Bank {

    id: number;
    name: string;
    isActive: boolean;
    cheques: ChequePago[];
    payments: Payment[];
}
