import { Provincia } from "./provincia";

export class Region {

    code: number;
    name: string;
    idRomano: string;
    isActive: boolean;
    provincias: Provincia[];

}
