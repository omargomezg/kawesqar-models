import { Branch } from "./Branch";
import { Cartola } from "./Cartola";
import { ChequePago } from "./ChequePago";
import { Client } from "./Client";
import { CostCenterChild } from "./CostCenterChild";
import { EliminaVenta } from "./EliminaVenta";
import { HistArticulos } from "./HistArticulos";
import { IngresoContado } from "./IngresoContado";
import { Payment } from "./Payment";
import { ProofOfPurchaseDetail } from "./ProofOfPurchaseDetail";
import { TipoPago } from "./tipoPago";
import { TurnoVenta } from "./TurnoVenta";

export class ProofOfPurchase {

    id: number;
    create: Date;
    isActive: boolean;
    usoCredito: boolean;
    estadoCredito: boolean;
    tipoVenta: string;
    nDocumento: number;
    descuento: number;
    notas: string;
    rutUsuario: string;
    idIngresoContado: number;
    idtVenta: number;
    client: Client;
    tipoPago: TipoPago;
    turnoVenta: TurnoVenta;
    branch: Branch;
    idSubGrupo: CostCenterChild;
    cartolas: Cartola[];
    cheques: ChequePago[];
    purchaseDetails: ProofOfPurchaseDetail[];
    eliminaVentass: EliminaVenta[];
    histArticuloss: HistArticulos[];
    ingresoContados: IngresoContado[];
    payments: Payment[];

}
