import { Product } from "./Product";
import { RelationFamilyBranch } from "./RelationFamilyBranch";

export class Family {

    id: number;
    name: string;
    isActive: boolean;
    products: Product[];
    branches: RelationFamilyBranch[];

}
