import { SaleTypeEnum } from '../enum/SaleTypeEnum';
import { RelationSystemUserOutputType } from "./RelationSystemUserOutputType";

export class OutputType {

    id: number;
    name: string;
    code: string;
    codeEnum: SaleTypeEnum;
    userOutputTypes: RelationSystemUserOutputType[];
    abbreviation: string;
}
