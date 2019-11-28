import { ShoppingCartContent } from "./ShoppingCartContent";
import { SystemUser } from "./SystemUser";

export class ShoppingCart {
    id: number;
    created: Date;
    updated: Date;
    contents: ShoppingCartContent[];
    systemUser: SystemUser;
}
