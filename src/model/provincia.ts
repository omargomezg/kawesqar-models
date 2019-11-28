import { Region } from "./region";
import { Commune } from "./Commune";

export class Provincia {

    codigo: number;
    padre: Region;
    name: string;
    isActive: number;
    communes: Commune[];

}
