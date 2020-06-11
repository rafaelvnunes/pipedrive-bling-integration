import { SupplierDTO } from "./supplier.dto";

export class NewPayingBillDTO {
    dataEmissao?: string;
    vencimentoOriginal?: string;
    competencia?: string;
    nroDocumento?: string;
    valor: number;
    historico?: string;
    categoria?: string;
    portador?: string;
    ocorrencia: {
        ocorrenciaTipo: string,
        diaVencimento?: number,
        nroParcelas?: number,
        diaSemanaVencimento?: 1|2|3|4|5|6|7
    }
    fornecedor: SupplierDTO
}