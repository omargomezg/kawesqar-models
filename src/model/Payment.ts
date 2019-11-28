import { PaymentMethodEnum } from "../enum/PaymentMethodEnum";
import { Bank } from "./Bank";
import { ProofOfPurchase } from "./ProofOfPurchase";

export class Payment {
    id: number;
    documentNumber: number;
    nameOfPerson: string;
    personName: string;
    paymentMethod: PaymentMethodEnum;
    proofOfPurchase: ProofOfPurchase;
    bank: Bank;
}
