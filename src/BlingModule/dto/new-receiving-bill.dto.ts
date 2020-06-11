import { CustomerDTO } from "./customer.dto";

export class NewReceivingBillDTO {
    dataEmissao?: string;
    vencimentoOriginal?: string;
    competencia?: string;
    nroDocumento?: string;
    valor: number;
    historico?: string;
    categoria?: string;
    idFormaPagamento: string;
    portador?: string;
    vendedor: string;
    ocorrencia: {
        ocorrenciaTipo: string,
        diaVencimento?: number,
        nroParcelas?: number,
        diaSemanaVencimento?: 1|2|3|4|5|6|7
    }
    cliente: CustomerDTO
}